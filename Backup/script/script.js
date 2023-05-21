const select = document.getElementById('opciones');
const tagsContainer = document.getElementById('tags');

select.addEventListener('change', function() {
  const selectedOption = select.options[select.selectedIndex];
  
  if (selectedOption.value !== "") {
    const tag = document.createElement('div');
    tag.className = 'tag';
    
    const tagText = document.createTextNode(selectedOption.text);
    tag.appendChild(tagText);
    
    const closeBtn = document.createElement('span');
    closeBtn.className = 'close';
    closeBtn.innerHTML = '&times;';
    closeBtn.addEventListener('click', function() {
      tag.parentNode.removeChild(tag);
    });
    
    tag.appendChild(closeBtn);
    tagsContainer.appendChild(tag);
  }
});
