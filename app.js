const bookList = document.querySelector('#book-list ul')


// Delete book
bookList.addEventListener('click', function(e) {
  if(e.target.className === 'delete') {
    const li = e.target.parentElement;
    // li.parentElement.removeChild(li)
    bookList.removeChild(li)
  }
})

// Add book
const addBook = document.forms['add-book']

addBook.addEventListener('submit', function (e) {
  e.preventDefault()
  const nameValue = addBook.querySelector('.add-name').value;
  const authorValue = addBook.querySelector('.add-author').value

  // Create book entry
  const li = document.createElement('li')
  const bookName = document.createElement('span')
  const bookAuthor = document.createElement('span')
  const deleteButton = document.createElement('span')

// add input content
  bookName.textContent = nameValue;
  bookAuthor.textContent = authorValue;
  deleteButton.textContent = 'delete'

// add input classes
  bookName.classList.add('name');
  bookAuthor.classList.add('author');
  deleteButton.classList.add('delete');

// append information
  li.appendChild(bookName)
  li.appendChild(bookAuthor)
  li.appendChild(deleteButton)
  bookList.appendChild(li)
})
