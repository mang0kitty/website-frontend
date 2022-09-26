
export function CleanHTML(value: string): string {
    if (value === undefined) {
        return "No summary available at the moment"
    }
    var div = document.createElement("div");
    div.innerHTML = value;
    var text = div.textContent || div.innerText || "";
    return text.normalize();
}

export function GetPreview(text: string): string {
    if (text === undefined) {
        return "No summary available at the moment"
    }
    let count = 0;
    let quotes = false;
    text = text.normalize();

    let controlCharacters = /[^.'"!?]*([.'"!?])/g;

    let res = "";
    let match = null;
    while ((match = controlCharacters.exec(text))) {
        const control = match[1];

        switch (control) {
            case ".":
            case "!":
            case "?":
                if (!quotes && ++count >= 3) return res + match[0];
                break;
            case "'":
            case '"':
                quotes = !quotes;
                break;
            default:
                break;
        }

        res += match[0];
    }
   
    return res;
}