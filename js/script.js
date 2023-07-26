window.addEventListener('DOMContentLoaded', event => {

    // sidebars
    const sidebarToggle = document.querySelector('.side-menu-toogle');
    const sidebar = document.querySelector(".wrapper .sidebar-menu");

    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', event => {

            event.preventDefault();
            sidebar.classList.toggle('side-menu-toogled');
        });
    }

    const table = {
        head: ["nama", "action"],
        body: [
            {
                data:["kusen"],
                action:{
                    tipe:"",
                    url:"",
                    icon:""
                }
            }
        ]
    }
    if (table?.head && table?.head.length > 0) {

        table?.head.forEach((th)=>{console.log(th)})
        
    }
    if (table?.body && table?.body.length > 0) {

        table?.body.forEach((tb)=>{console.log(tb)})
        
    }

});