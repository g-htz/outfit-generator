// Function to handle Google login
function loginWithGoogle() {
    // Implement Google OAuth logic here
    // Once logged in, update UI and store user information if needed
}

// Function to handle photo upload
function uploadPhoto() {
    var input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = function(event) {
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.onload = function() {
            var img = document.createElement('img');
            img.src = reader.result;
            document.getElementById('gallery').appendChild(img);
        }
        reader.readAsDataURL(file);
    }
    input.click();
}

function selectOutfit(category) {
    var gallery = document.getElementById('gallery');
    var outfitSection = document.getElementById('outfit');
    
    // Clear the outfit section
    outfitSection.innerHTML = '';

    // Get all images from the gallery
    var images = gallery.getElementsByTagName('img');

    // Filter images based on category
    var categoryImages = [];
    for (var i = 0; i < images.length; i++) {
        var img = images[i];
        if (img.dataset.category === category) {
            categoryImages.push(img.cloneNode(true));
        }
    }

    // Display selected outfit images
    categoryImages.forEach(function(img) {
        outfitSection.appendChild(img);
    });
}

// Event listener for login button
document.getElementById('loginBtn').addEventListener('click', loginWithGoogle);

// Event listener for photo upload button
document.getElementById('uploadBtn').addEventListener('click', uploadPhoto);

// Event listener for category buttons
document.querySelectorAll('.categoryBtn').forEach(function(btn) {
    btn.addEventListener('click', function() {
        var category = this.dataset.category;
        selectOutfit(category);
    });
});