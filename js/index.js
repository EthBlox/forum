// .ready() offers a way to run JS code as soon as the page's DOM becomes safe to manipulate
$(document).ready(function() {
    if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask is installed!');
    }
});