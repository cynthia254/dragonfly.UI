<template>
  
  <div class="sidebar" style="margin-bottom:30px;">
    
    <div class="logo-details">
     
      <span class="logo_name">PAYHOUSE WAN SUPPORT </span>
    </div>
    
      <ul class="nav-links">
       
       
    
        
        <li>
          <a href="#">
            <i class=' bx-pie-chart-alt-2' ></i>
            <span class="links_name"><div class=""><router-link to="/incident" class="text-dark">Incidents</router-link></div>

            </span>
          
          </a>
          
        </li>
     
        <li>
          <a href="#">
            <i class='bx bx-box' ></i>
            <span class="links_name"><router-link to="/queue" class="text-dark">Queues</router-link></span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class='bx bx-list-ul' ></i>
            <span class="links_name"><router-link to="/service" class="text-dark">Service Requests</router-link></span>
          </a>
        </li>
  
    
        
       
        <li>
          <a href="#">
            <i class='bx bx-coin-stack' ></i>
            <span class="links_name"><router-link to="/problem" class="text-dark">Problems</router-link></span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class='bx bx-book-alt' ></i>
            <span class="links_name"><router-link to="/changes" class="text-dark">Changes</router-link></span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class='bx bx-user' ></i>
            <span class="links_name">Post Incident Reviews</span>
          </a>
        </li>
       
  
        
         <span class="links_name"><h1>KNOWLEDGE</h1></span>
     
   
        
        <li>
       
          <a href="#">
            <i class='bx bx-message' ></i>
            <span class="links_name">Knowledge Base</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class='bx bx-message' ></i>
            <span class="links_name">Report</span>
          </a>
        
        </li>
        <span class="links_name"><h1>PEOPLE</h1></span>
        <li>
          <a href="#">
            <i class='bx bx-message' ></i>
            <span class="links_name">Customers</span>
          </a>
        
        </li>
        <li>
          <a href="#">
            <i class='bx bx-message' ></i>
            <span class="links_name">Teams</span>
          </a>
        
        </li>
        <span class="links_name"><h1>OPERATIONS</h1></span>
        <li>
          <a href="#">
            <i class='bx bx-message' ></i>
            <span class="links_name">Notifications</span>
          </a>
        
        </li>
        <li>
          <a href="#">
            <i class='bx bx-message' ></i>
            <span class="links_name">On Call</span>
          </a>
        
        </li>

        <div class="sticky">
     

      <li>
          <a href="#">
            <i class='bx bx-message' ></i>
            <span class="links_name">Project Settings</span>
          </a>
        
        </li>
        <li>
          <a href="#">
            <i class='bx bx-message' ></i>
            <span class="links_name">Give Feedback</span>
          </a>
        
        </li>
        
     
      </div>
       
      
      
        
       
    
     
    
      </ul>
  </div>
  <section class="home-section">
    <nav>
      
      <div class="sidebar-button">
        <i class='bx bx-menu sidebarBtn'></i>
        <span class="dashboard">Home</span>
        <div class="dropdown-content">
    <a href="#">Create dashboard</a>
    <a href="#">View dashboard</a>
   
  </div>
      </div>
      <div class="sidebar-button">
        <i class='bx bx-menu sidebarBtn'></i>
        <span class="dashboard">Your Work</span>
        <div class="dropdown-content">
    <a href="#">Assigned to me</a>
    <a href="#">Recent</a>
    <a href="#">Queues</a>
    
  </div>
      </div>
      <div class="sidebar-button">
        <i class='bx bx-menu sidebarBtn'></i>
        <span class="dashboard">Projects</span>
        <div class="dropdown-content">
    <a href="#">Create projects</a>
    <a href="#">View all projects</a>
   
  </div>
      </div>
      <div class="sidebar-button">
        <i class='bx bx-menu sidebarBtn'></i>
        <span class="dashboard">Filters</span>
      </div>
      <div class="sidebar-button">
        <i class='bx bx-menu sidebarBtn'></i>
        <span class="dashboard">Team</span>
        <div class="dropdown-content">
    <a href="#">Create Your Team</a>
    <a href="#">Invite people to Payhouse system</a>
    
  </div>
      </div>
      <div class="sidebar-button">
       
        <span class="btn btn-danger">Create+</span>
      </div>

      <div class="sidebar-button">
        <!--<img src="images/profile.jpg" alt="">-->
        <span class="admin_name">Monari, Cynthia</span>
        <div class="dropdown-content">
    <a href="#">Profile settings</a>
    <a href="#"><router-link to="/customer" class="text-dark">Go to customer's portal</router-link></a>
   
    <a href="#">SignOut</a>
    
  </div>
     
    
  
      </div>

    </nav>

    <div class="home-content">
      <div class="overview-boxes">
        <div class="box">
          <div class="right-side">
            <div class="box-topic">Total Unsolved</div>
            <br/>
            <div class="number">40</div>
            <div class="indicator">
             
            </div>
          </div>
          
        </div>
        <div class="box">
          <div class="right-side">
            <div class="box-topic">Overdue</div>
            <br/>
            <div class="number">38</div>
            <div class="indicator">
             
            </div>
          </div>
         
        </div>
        <div class="box">
          <div class="right-side">
            <div class="box-topic">Due Today</div>
            <br/>
            <div class="number">12</div>
            <div class="indicator">
            
            
            </div>
          </div>
        
        </div>
        <div class="box">
          <div class="right-side">
            <div class="box-topic">Open</div>
            <br/>
            <div class="number">11</div>
            <div class="indicator">
            
        
            </div>
          </div>
        
        </div>
       
       
      </div>

      <div class="sales-boxes">
        <div class="recent-sales box">
          <div class="title">All Open Tickets</div>
          <div class="sales-details">
            <table class="table">
              <thead class="thead-light">
                <tr>
                  <th scope="col">Key</th>
                  <th scope="col">Request Type</th>
                  <th scope="col">Summmary</th>
                  <th scope="col">Reporter</th>
                  <th scope="col">Assignee</th>
                  <th scope="col">Created</th>
                  <th scope="col">Status</th>
                  <th scope="col">Priority</th>
                  
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                 
                  <td>Request admin access</td>
                  <td>Administrator access for workday</td>
                  <td>Mark,KCB Kenya</td>
                  <td>Gitau,Payhouse</td>
                  <td>1/4/23</td>
                  <td><select name="status" id="status">
                    <option value="volvo">In progress</option>
  <option value="saab">Awaiting</option>
  <option value="mercedes">Escalate</option>
  <option value="audi">Pending</option>
  <option value="audi">Resolved</option>
  <option value="audi">Canceled</option>
 
                  </select></td>
                  <td><select name="status" id="status">
                    <option value="volvo">High</option>
  <option value="saab">Medium</option>
  <option value="mercedes">Low</option>
 
 
                  </select></td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                 
                  <td>Request a change</td>
                  <td>Production system upgrade</td>
                  <td>Felix,KCB Uganda</td>
                  <td>Solomon,Payhouse</td>
                  <td>1/4/23</td>
                  <td><select name="status" id="status">
                    <option value="volvo">Pending</option>
  <option value="saab">Awaiting</option>
  <option value="mercedes">Escalate</option>
  <option value="audi">In Progress</option>
  <option value="audi">Resolved</option>
  <option value="audi">Canceled</option>
  <option value="audi">Open</option></select></td>
  <td><select name="status" id="status">
                    <option value="volvo">Low</option>
  <option value="saab">Medium</option>
  <option value="mercedes">High</option>
 
 
                  </select></td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Report a system problem</td>
                  <td>404 error returning on customer announcements page</td>
                  <td>Carol,KCB Rwanda</td>
                  <td>Claire,Payhouse</td>
                  <td>2/4/23</td>
                  <td><select name="status" id="status">
                    <option value="volvo">Open</option>
  <option value="saab">Awaiting</option>
  <option value="mercedes">Escalate</option>
  <option value="audi">In Progress</option>
  <option value="audi">Resolved</option>
  <option value="audi">Canceled</option>
  <option value="audi">Pending</option></select></td>

  <td><select name="status" id="status">
                    <option value="volvo">Medium</option>
  <option value="saab">High</option>
  <option value="mercedes">Low</option>
 
 
                  </select></td>
                </tr>
              </tbody>
            </table>
            
            
          </div>
          <div class="button">
            <a href="#">See All</a>
          </div>
        </div>
        <div class="top-sales box">
          <div class="title">Top Raised Issues</div>
          <ul class="top-sales-details">
            
            <li>
            <a href="#">
             
              <span class="product" style="list-style-type: disc;">How to jump start a battery when it has completely gone off?</span>
            </a>
     
          </li>
          <li>
            <a href="#">
       
              <span class="product" style="list-style-type: disc;">Need of more base chargers </span>
            </a>
      
          </li>
          <li>
            <a href="#">

              <span class="product">Proposal of Z card with all possible errors and how to solve them</span>
            </a>

       </li>
       <div class="button">
            <a href="#">See All</a>
          </div>
          </ul>
        </div>
      </div>
    </div>
  </section>
  



 
</template>


<script>
    export default {
        name:"ticketPage"
        
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
.sidebar{
  position: fixed;
  height: 100%;
  width: 240px;
  background: #e6e3e3;
  transition: all 0.5s ease;
  z-index: 1000;
    left: 175px;
    margin-left: -175px;
    overflow-y: auto;
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
  
  
}
.sidebar.active{
  width: 60px;
}
.sidebar .logo-details{
  height: 75px;
  display: flex;
  align-items: center;
}
.sidebar .logo-details i{
  font-size: 28px;
  font-weight: 500;
  color: #ec1010;
  min-width: 60px;
  text-align: center
}
.sidebar .logo-details .logo_name{
  color: #df0a0a;
  font-size: 24px;
  font-weight: 500;
  position: -webkit-sticky;
  position: sticky;
  top: 0;

  background-color: #fff;
 
}
.sidebar .nav-links li 
.sidebar .nav-links{
  margin-top: 10px;
  position: relative;
}
.sidebar .nav-links li{
  position: relative;
  list-style: none;
  height: 40px;
}
.sidebar .nav-links li a{
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: all 0.4s ease;
}
.sidebar .nav-links li a.active{
  background: #6edb08;
}
.sidebar .nav-links li a:hover{
  background: #d4e213;
}
.sidebar .nav-links li i{
  min-width: 60px;
  text-align: center;
  font-size: 18px;
  color: #fff;
}
.sidebar .nav-links li  h1{
  color: #080808;
  font-size: 13px;
margin-bottom: 10%;
  margin-right: 50%;

  
}
.sidebar .nav-links li a .links_name{
  color: #080808;
  font-size: 16px;
  font-weight: 400;
  white-space: nowrap;
  float: left;
  display: block;
  text-align: center;
  padding: 15px;
  text-decoration: none;
}
.sidebar .nav-links .log_out{
  position: fixed;
  bottom: 0;
  width: 100%;
}
.home-section{
  position: relative;
  background: #f5f5f5;
  min-height: 100vh;
  width: calc(100% - 240px);
  left: 240px;
  transition: all 0.5s ease;
}
.sidebar.active ~ .home-section{
  width: calc(100% - 60px);
  left: 60px;
}
.home-section nav{
  display: flex;
  justify-content: space-between;
  height: 80px;
  background: #fff;

  align-items: center;
  position: fixed;
  width: calc(100% - 240px);
  left: 240px;
  z-index: 100;
  padding: 0 20px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  transition: all 0.5s ease;
}
.sidebar.active ~ .home-section nav{
  left: 60px;
  width: calc(100% - 60px);
}
.home-section nav .sidebar-button{
 
  align-items: center;
  font-size: 24px;
  font-weight: 500;
  position: relative;
  display: inline-block;
}


nav .sidebar-button i{
  font-size: 35px;
  margin-right: 10px;
}
.home-section nav .search-box{
  position: relative;
  height: 50px;
  max-width: 550px;
  width: 100%;
  margin: 0 20px;
}
nav .search-box input{
  height: 100%;
  width: 100%;
  outline: none;
  background: #F5F6FA;
  border: 2px solid #EFEEF1;
  border-radius: 6px;
  font-size: 18px;
  padding: 0 15px;
}
nav .search-box .bx-search{
  position: absolute;
  height: 40px;
  width: 40px;
  background: #2697FF;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 4px;
  line-height: 40px;
  text-align: center;
  color: #fff;
  font-size: 22px;
  transition: all 0.4 ease;
}
.home-section nav .profile-details{
  display: flex;
  align-items: center;
  background: #F5F6FA;
  border: 2px solid #EFEEF1;
  border-radius: 4px;
  height: 30px;
  min-width: 40px;
  padding: 0 15px 0 2px;
  
}
nav .profile-details img{
  height: 40px;
  width: 40px;
  border-radius: 6px;
  object-fit: cover;
}
nav  .admin_name{
  font-size:18px;
  font-weight: 500;
  color: #333;
  margin: 0 10px;
  white-space: nowrap;
}
nav .profile-details i{
  font-size: 25px;
  color: #333;
}
.home-section .home-content{
  position: relative;
  padding-top: 104px;
}
.home-content .overview-boxes{
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding:15px 14px;
  margin-bottom: 26px;
}
.overview-boxes .box{
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100% / 4 - 15px);
  background: #fff;
  padding: 15px 14px;
  border-radius: 12px;
  box-shadow: 0 5px 10px rgba(0,0,0,0.1);
}
.overview-boxes .box-topic{
  font-size: 20px;
  font-weight: 500;
}
.home-content .box .number{
  display: inline-block;
  font-size: 35px;
  margin-top: -6px;
  font-weight: 500;
}
.home-content .box .indicator{
  display: flex;
  align-items: center;
}
.home-content .box .indicator i{
  height: 20px;
  width: 20px;
  background: #8FDACB;
  line-height: 20px;
  text-align: center;
  border-radius: 50%;
  color: #fff;
  font-size: 20px;
  margin-right: 5px;
}
.box .indicator i.down{
  background: #e87d88;
}
.home-content .box .indicator .text{
  font-size: 12px;
}
.home-content .box .cart{
  display: inline-block;
  font-size: 32px;
  height: 50px;
  width: 50px;
  background: #cce5ff;
  line-height: 50px;
  text-align: center;
  color: #66b0ff;
  border-radius: 12px;
  margin: -15px 0 0 6px;
}
.home-content .box .cart.two{
   color: #2BD47D;
   background: #C0F2D8;
 }
.home-content .box .cart.three{
   color: #ffc233;
   background: #ffe8b3;
 }
.home-content .box .cart.four{
   color: #e05260;
   background: #f7d4d7;
 }
.home-content .total-order{
  font-size: 20px;
  font-weight: 500;
}
.home-content .sales-boxes{
  display: flex;
  justify-content: space-between;
  /* padding: 0 20px; */
}

/* left box */
.home-content .sales-boxes .recent-sales{
  width: 100%;
  background: #fff;
  padding: 20px 30px;
  margin: 0 20px;
  border-radius: 12px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}
.home-content .sales-boxes .sales-details{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.sales-boxes .box .title{
  font-size: 30px;
  font-weight: 500;
  color: #cf061a;
  /* margin-bottom: 10px; */
}
.sales-boxes .sales-details li.topic{
  font-size: 20px;
  font-weight: 500;
}
.sales-boxes .sales-details li{
  list-style: none;
  margin: 8px 0;
}
.sales-boxes .sales-details li a{
  font-size: 18px;
  color: #333;
  font-size: 400;
  text-decoration: none;
}
.sales-boxes .box .button{
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.sales-boxes .box .button a{
  color: #fff;
  background: #0A2558;
  padding: 4px 12px;
  font-size: 15px;
  font-weight: 400;
  border-radius: 4px;
  text-decoration: none;
  transition: all 0.3s ease;
}
.sales-boxes .box .button a:hover{
  background:  #0d3073;
}

/* Right box */
.home-content .sales-boxes .top-sales{
  width: 35%;
  background: #fff;
  padding: 20px 30px;
  margin: 0 20px 0 0;
  border-radius: 12px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}
.sales-boxes .top-sales li{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
}
.sales-boxes .top-sales li a img{
  height: 40px;
  width: 40px;
  object-fit: cover;
  border-radius: 12px;
  margin-right: 10px;
  background: #333;
}
.sales-boxes .top-sales li a{
  display: flex;
  align-items: center;
  text-decoration: none;
}
.sales-boxes .top-sales li .product,
.price{
  font-size: 17px;
  font-weight: 400;
  color: #333;
}
/* Responsive Media Query */
@media (max-width: 1240px) {
  .sidebar{
    width: 60px;
  }
  .sidebar.active{
    width: 220px;
  }
  .home-section{
    width: calc(100% - 60px);
    left: 60px;
  }
  .sidebar.active ~ .home-section{
    /* width: calc(100% - 220px); */
    overflow: hidden;
    left: 220px;
  }
  .home-section nav{
    width: calc(100% - 60px);
    left: 60px;
  }
  .sidebar.active ~ .home-section nav{
    width: calc(100% - 220px);
    left: 220px;
  }
}
@media (max-width: 1150px) {
  .home-content .sales-boxes{
    flex-direction: column;
  }
  .home-content .sales-boxes .box{
    width: 100%;
    overflow-x: scroll;
    margin-bottom: 30px;
  }
  .home-content .sales-boxes .top-sales{
    margin: 0;
  }
}
@media (max-width: 1000px) {
  .overview-boxes .box{
    width: calc(100% / 2 - 15px);
    margin-bottom: 15px;
  }
}
@media (max-width: 700px) {
  nav .sidebar-button .dashboard,
  nav .profile-details .admin_name,
  nav .profile-details i{
    display: flex;
  }
  .home-section nav .profile-details{
    height: 20px;
    min-width: 20px;
  }
  .home-content .sales-boxes .sales-details{
    width: 560px;
  }
}
@media (max-width: 550px) {
  .overview-boxes .box{
    width: 100%;
    margin-bottom: 15px;
  }
  .sidebar.active ~ .home-section nav .profile-details{
    display: none;
  }
}
  @media (max-width: 400px) {
  .sidebar{
    width: 0;
  }
  .sidebar.active{
    width: 60px;
  }
  .home-section{
    width: 100%;
    left: 0;
  }
  .sidebar.active ~ .home-section{
    left: 60px;
    width: calc(100% - 60px);
  }
  .home-section nav{
    width: 100%;
    left: 0;
  }
  .sidebar.active ~ .home-section nav{
    left: 60px;
    width: calc(100% - 60px);
  }
}
h1{
  font-size: 18px;
}
.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 0px 0px 0 rgba(0,0,0,0.2);
  background: #e6e3e3;
  transition: 0.3s;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(160, 221, 18, 0.2);
}

/* Add some padding inside the card container */
.container {
  padding: 0px 0px;

}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(100, 221, 64, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 8px 8px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {background-color: #d4e213;}

.sidebar-button:hover .dropdown-content {display: block;}


.dropdown-content a{
  font-size: 13px;
}
.sticky{
  font-size: 24px;
  position: -webkit-sticky;
  position: sticky;
  top:50%;
  background-color: #fff;
 

}



</style>