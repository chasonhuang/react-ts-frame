/**
 * copy to clipboard
 * @param copyText string
 */
export function copyToClipboard(copyText: string) {
  let copyTextArea: HTMLTextAreaElement | null = document.querySelector("textarea#__CopyToClipboard_textarea");
  if (copyTextArea === undefined || copyTextArea === null) {
    copyTextArea = document.createElement("textarea");
    copyTextArea.id = "__CopyToClipboard_textarea";
    copyTextArea.style.width = "20px";
    copyTextArea.style.height = "20px";
    copyTextArea.style.opacity = "0";
    copyTextArea.style.position = "fixed";
    copyTextArea.style.top = "-20px";
    document.body.appendChild(copyTextArea);
  }
  copyTextArea.value = copyText;
  copyTextArea.select();
  document.execCommand("copy");
}
