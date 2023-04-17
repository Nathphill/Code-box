// copy the code to your clipboard
function copyToClipboard(event) {
    const codeElement = document.getElementById("code-example");
    const codeText = codeElement.innerText;
    navigator.clipboard.writeText(codeText).then(function() {
      const copyBtn = event.target;
      // Save the original button text and icon
      const originalText = copyBtn.innerHTML;
      // Change the button text and icon
      copyBtn.innerHTML = '<i class="bx bx-check-circle"></i></i> Copied!';
      // Reset the button text and icon after 2 seconds
      setTimeout(function() {
        copyBtn.innerHTML = originalText;
      }, 2000);
    }, function() {
      alert('Failed to copy code');
    });
  }
  
  