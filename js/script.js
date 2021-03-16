

// select all the student list items, not a container of the student list.
// set the number of students that have to be shown on the page in perPage variable.
const listItems = document.querySelectorAll('.student-item');
const perPage = 10;

// check on console if the listItems variable contains right elements
console.log(listItems);

//set a function to show and hide all the studensts except for the ten to be displayed on a given page.
//endIndex has -1 at the end of the carculation, otherwise the list will be shown 1 to 11 students.
//(because index starts from 0)
//when index is greater than or equal to startIndex and less than or equal to endIndex
//students are shown on the page but if not, they are hided on the page.
const showPage = ( list, page ) => {
  const startIndex = ( page * perPage ) - perPage;
  const endIndex = ( page * perPage ) -1 ;
  for ( let i = 0; i < list.length; i ++ ){
    if( i >= startIndex && i <= endIndex ){
      listItems[i].style.display = 'block';
    } else {
      listItems[i].style.display = 'none';
    }
  }
}


//set a append page links function that creates and appends funtioning pagination links.
const appendPageLinks = (list) => {

//create a div element to nest ul element below and set a class name 'pagination'.
//append it to div element with the class name of page.
  const paginationDiv = document.createElement('div');
  paginationDiv.className = 'pagination';
  const pageDiv = document.querySelector('.page');
  pageDiv.appendChild(paginationDiv);

//create ul element to nest li elements below
  const ul = document.createElement('ul');
  paginationDiv.appendChild(ul);

//create li elements.
//1 li element contain pagination link for every 10 students.
//set a page of number variable with Math.ceil(list.length/perPage);
//otherwise there will be no extra page for less than 10 students.
  const pageOfNumber = Math.ceil(list.length/perPage);
  for ( let i = 1; i <= pageOfNumber ; i ++ ){
    const li = document.createElement('li');
    li.innerHTML = '<a href="#">' + [i] + '</a>' + '';
    ul.appendChild(li);
  }

//firstly, add active class name to the first pagination link.
  ul.firstElementChild.className = 'active';

//select a pagination link collection in buttons variable.
  const buttons = document.querySelectorAll('a');

//set event handler to every pagination links.
//when particular pagnination link is clicked,
//it shows particular list of students on the page.
  for ( let i = 0; i < buttons.length; i ++ ){
    buttons[i].addEventListener('click', (e) => {
      for( let i = 0; i < buttons.length; i ++ ){
        buttons[i].classList.remove('active');
      }
      const target = e.target;
      target.classList.add('active');

//call showPage function with arguemnts listItems(students list items)
//and text content of event target.
      showPage(listItems,target.textContent)
    });
  }
}

//call showPage function to everytime page loads to show first page of 10 student.
//page argument should be listItems and 1(first page)
showPage(listItems,1);
//call appendPageLinks function with argrument listItems
appendPageLinks(listItems);
