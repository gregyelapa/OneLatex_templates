const PREAMBLE_LATEX_CODE = '#ffc000'; // OneNote for Windows Desktop shows it as "Gold" hovering over the color

function updateBabelPackageField() {

    var settings = {};
    var e1 = document.getElementById("babelPackageSelector");

    console.log(e1);
    console.log(e1.value);

    // var text2 = e2.options[e2.selectedIndex].text;
    // console.log(text2);
    settings.documentClass = "\\documentclass[" + e1.value;

    $('#babelPackage').val('\\usepackage[' + e1.value + ']{babel}');


}

async function savePackageInCBHTML(a) {
    let blob;
    try {
        let blob;
        const clipboardItems = await navigator.clipboard.read();
        
        for (const clipboardItem of clipboardItems) {
            const htmlData = await clipboardItem.getType('text/html');
            // Display the HTML content from the clipboard
            console.log(htmlData);
            blob = htmlData;
            const b = await htmlData.text();
            alert('eeeeee');
            console.log(b);
        }

        console.log(blob);

        console.log(a);
        const field = $('#babelPackage').val();
        console.log(field);

        const CBstring = '<p><span style="background:' + PREAMBLE_LATEX_CODE + '">' + field + "</span></p>";

        console.log(CBstring);

        await navigator.clipboard.write([new ClipboardItem({
            'text/html': new Blob([CBstring], { type: 'text/html' })
        })]);
        
        console.log("Text copied to html-clipboard");
    } catch (err) {
        console.error("Failed to interact with clipboard: ", err);
    }
}