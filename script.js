document.addEventListener('DOMContentLoaded', function () {
    const image = document.getElementById('copyImage');
    const confirmation = document.getElementById('confirmation');
    const contractAddress = "7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr"; // Replace with your contract address
  
    image.addEventListener('click', function () {
      navigator.clipboard.writeText(contractAddress).then(function() {
        confirmation.classList.remove('hidden');
        setTimeout(function() {
          confirmation.classList.add('hidden');
        }, 2000); // Hide confirmation after 2 seconds
      }).catch(function(err) {
        console.error('Could not copy text: ', err);
      });
    });
  });
  