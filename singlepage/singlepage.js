// Shows one page and hides the other two 
function showPage(page) { 

    // Hide all of the page divs: 
    document.querySelectorAll('div[id^="page"]').forEach(div => { 
        div.style.display = 'none'; 
    }); 

    // Show the div provided in the argument 
    document.querySelector(`#${page}`).style.display = 'block'; 
} 

// Wait for page to loaded: 
document.addEventListener('DOMContentLoaded', function() { 

    // Show the first page by default
    showPage('page1');

    // Select all buttons 
    document.querySelectorAll('button').forEach(button => { 

        // When a button is clicked, switch to that page 
        button.onclick = function() { 
            showPage(this.dataset.page); 
        } 
    }) 
});