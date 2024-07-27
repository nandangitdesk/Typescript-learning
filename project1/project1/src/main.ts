const getUsername = document.querySelector("#user") as HTMLInputElement;
const formSubmit = document.querySelector("#form") as HTMLFormElement;
const main_container = document.querySelector(".main_container") as HTMLElement;

interface userData {
  id: string;
  login: string;
  avatar_url: string;
  url: string;
}

// reusable func

async function customFetcher<T>(url: string, options?: RequestInit): Promise<T> {

  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`Network response is not ok - status ${response.status}`);
  }

  const data = response.json();
  console.log(data);    
  
  return data;

}

const showResultUI = (singleUser: userData)=>{
    const {avatar_url,url,login} = singleUser
    main_container.insertAdjacentHTML(
        "beforeend",
        `
        <div class="card">
         <img src=${avatar_url} alt=${login}>
         <hr>
         <p class="user-name">${login}</p>
         <div class="card-footer">
            <img src=${avatar_url} alt=${login}>
            <a href="${url}" >Github </a>
         </div>
        </div>
        
        `
    )
}

function fetchUserData(url: string) {
  customFetcher<userData[]>(url, {}).then((userInfo)=>{
    for(const singleUser of userInfo){
        showResultUI(singleUser)
    }
  })
}

fetchUserData("https://api.github.com/users");

formSubmit.addEventListener("submit",async(e)=>{
  e.preventDefault()

  const searchTerm =getUsername.value.toLowerCase()

  try {
    
    const url = "https://api.github.com/users"
    const allUsersData = await customFetcher<userData[]>(url ,{})
    const matchingUsers = allUsersData.filter((user)=>{
        return user.login.toLowerCase().includes(searchTerm)
    })
   
    //  we need to clear the previous data
    main_container.innerHTML=""


     if (matchingUsers.length === 0) {
      main_container.insertAdjacentHTML(
        "beforeend",
        `
        <p class="empty-msg">No matching users found. </p>
        `
      )
     }else{
      for( const singleUser of matchingUsers){
        showResultUI(singleUser)
      }
     }

  } catch (error) {
    console.log("Error",error);
    
  }
})
