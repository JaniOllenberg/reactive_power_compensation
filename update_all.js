const fs = require('fs');
const path = require('path');

const filesToUpdate = [
    'pf_calc.html',
    'pf_calc_v2.html',
    'pf_calc_v3.html',
    'pf_calc_v4.html',
    'pf_calc_v5.html',
    'pf_calc_v6.html'
];

filesToUpdate.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');

    // 1. Add Theme CSS
    if (!content.includes('shared_theme.css')) {
        content = content.replace('</title>', '</title>\n    <link rel="stylesheet" href="shared_theme.css">');
    }

    // 2. Add UI JS
    if (!content.includes('shared_ui.js')) {
        content = content.replace('</body>', '<script src="shared_ui.js"></script>\n</body>');
    }

    // 3. Add Frequency Input for v2-v6 (v1 already has it)
    if (file !== 'pf_calc.html' && !content.includes('id="freq"')) {
        // Find a good place to insert the frequency input. Usually after v_line or pf2
        const freqHTML = `\n        <label>Frequency (Hz)</label>\n        <input type="number" id="freq" value="50" step="1">\n`;
        
        if (content.includes('id="v_line"')) {
            content = content.replace(/(<input[^>]+id="v_line"[^>]*>)/, '$1' + freqHTML);
        } else if (content.includes('id="pf2"')) {
            content = content.replace(/(<input[^>]+id="pf2"[^>]*>)/, '$1' + freqHTML);
        }

        // Update the JS logic from `const f = 50;` to dynamic reading
        content = content.replace(/const f = 50;/g, "const f = parseFloat(document.getElementById('freq').value) || 50;");
    }

    // Write the updated content back
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
});
