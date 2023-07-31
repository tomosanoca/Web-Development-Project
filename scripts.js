function search() {
    const keyword = document.getElementById("searchInput").value.trim();

    if (keyword == "Asia"||keyword =="AsiaPacific") {
        const url = "AsiaPacific.html?q" + encodeURIComponent(keyword);
        window.location.href = url;
        }
    else if(keyword == "Africa") {
        const url = "Africa.html?q" + encodeURIComponent(keyword);
        window.location.href = url;
        }
    else if(keyword == "Americas"||keyword =="America") {
            const url = "Americas.html?q" + encodeURIComponent(keyword);
            window.location.href = url;
            }
    else if(keyword == "Europe") {
                const url = "Europe.html?q" + encodeURIComponent(keyword);
                window.location.href = url;
                }
     else if(keyword == "NewYork"||keyword =="NewYorkCity") {
                const url = "NewYorkCity.html?q" + encodeURIComponent(keyword);
                window.location.href = url;
                }
    else if(keyword == "Bangkok"||keyword =="Thailand") {
                const url = "Bangkok.html?q" + encodeURIComponent(keyword);
                window.location.href = url;
                }
    else if(keyword == "Nairobi"||keyword =="Kenya") {
                const url = "Nairobi, Kenya.html?q" + encodeURIComponent(keyword);
                window.location.href = url;
                }
    else {
        alert("No data! Please search again");
        }
}

function subscribe() {
    alert("Thank you for subscribing! We will send you latest newsletter monthly.")
}

function showMenu()
{
    document.getElementById("maindropdown").classList.toggle("show");
}

window.onclick = function(event) 
{
    if (!event.target.matches('.dropbtn')) 
    {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) 
      {
        var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) 
            {
                openDropdown.classList.remove('show');
            }
      }
    }
  }

  function showSubMenu()
  {
    document.getElementById("subdropdown").classList.toggle("show");
  }