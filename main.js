const posts = [
    { id:"0",title:"React.js",image:"./images/1_e-CnQ3XcOSjznpnBhMXQKg.gif",description:"React.js is a worldwide javascript framework, its easy to use, and efficient for large-scale projects development.",date:"20/10/2026",category:"tech"},
    { id:"1",title:"ملاح نعيمية",image:"./images/الصورة-الرئيسية-لوصفةملاح-النعيمية-باللحم-المفروم.webp",description:"هي أكلة سودانية، يتم تحضيره من البصل واللحم المفروم والزبادي والصلصة بالاضافة الى التوابل. معروفة، ويعتبر من ألذ الأكلات السودانية ",date:"20/10/2026",category:"food"},
    { id:"2",title:"Pizza",image:"./images/20220211142347-margherita-9920_3bc06a7c-7b12-48e2-afa2-c49eee4cfe27.jpg",description:"It's a worldwide meal, delicious and tasty, its dough includes white flour, salt, yeast, powder milk, oil and sugar all mixed with water.",date:"20/10/2026",category:"food"},
    { id:"3",title:"Saudi Arabia",image:"./images/Mecca-Great-Mosque_H_01.webp",description:"its a calm country haunted by calm people, and its religiously important because of Mecca and Medinah. ",date:"20/10/2026",category:"travel"},
    { id:"4",title:"Egypt",image:"./images/harbour-alexandria.jpg",description:"its a live country, and its very populated with people, its nice how people there are relying on lord to achieve goals.",date:"20/10/2026",category:"travel"},
    { id:"5",title:"Green Tea",image:"./images/green-tea-1536x1024.jpg",description:"its a relaxing drink, beside its very healthy, it gives consistent focus for a period of time",date:"20/10/2026",category:"drink"},
    { id:"6",title:"Coffee",image:"./images/coffee-1024x768.jpg",description:"its an Energy provider drink, giving high focus with activity for limited period of time.",date:"20/10/2026",category:"drink"}
]

//function to change how cards appear on different screen sizes
function CardsDisplayChange () {
    let screenSize = window.innerWidth;
    console.log(screenSize)
    // Logic for screens 768px or smaller
    if(screenSize<768) {
        document.getElementById('cards-container').style.display ="flex"
        document.getElementById('cards-container').style.flexDirection="column"
    }
    if(screenSize>=768 && screenSize <1024) {
    console.log('Screen is 768px or less!');
    document.getElementById('cards-container').style.display = "flex"
    document.getElementById('cards-container').style.flexDirection = "row"
    document.getElementById('cards-container').style.flexWrap = "wrap"
    document.getElementById('cards-container').style.gap="10px"
    document.getElementById('cards-container').style.padding = "10px 5px 0px 10px"
    } else if(screenSize>=1024) {
    // Logic for screens larger than 768px
    document.getElementById('cards-container')
    }
}


//event listener to change how cards are displayed in screen size specific changes     
window.addEventListener('resize', CardsDisplayChange)

//event listener to change how cards are displayed when different option is chosen from posts' categories 
window.addEventListener('change', CardsDisplayChange)

let lastPostTracker = 3

//creating posts cards to display all posts in blog section
function displayAllPosts () {
    for(i=0;i<lastPostTracker;i++) {
            const card = document.createElement('div')
            card.classList.add('card')
            const title = document.createElement('div')
            title.innerHTML = posts[i].title
            const image = document.createElement('img')
            image.src = posts[i].image
            const description = document.createElement('section')
            description.innerHTML = posts[i].description
            const date = document.createElement('div')
            date.innerHTML = posts[i].date
        
            card.appendChild(title)
            card.appendChild(image)
            card.appendChild(description)
            card.appendChild(date)
        
            //styling the dynamically created elements
            
            card.style.justifySelf = "center"
            card.style.display = "flex"
            card.style.flexDirection = "column"
                    
            card.style.borderRadius = "10px"
            card.style.padding = "10px"
            card.style.width = '20rem'
            card.style.height = "22rem"
            card.style.marginTop = "30px"
            card.style.gap = "5px"
            card.style.color = "#203c34"
            card.style.boxShadow = "-5px 5px 15px 5px #9d9d9d"
            image.style.height = "170px"
            title.style.fontWeight = "600"
            title.style.top="0px"
            title.style.fontSize = "18px"
            date.style.marginLeft = "auto"
            date.style.marginTop ="auto"
            document.getElementById('cards-container').style.display = "flex"
            document.getElementById('cards-container').style.flexDirection = "column"
            //appending chosen posts cards to the container inside the HTML file
            document.getElementById('cards-container').appendChild(card)
            document.getElementById('cards-container').style.paddingBottom = "10px"
        }
    }

displayAllPosts()

console.log(document.getElementsByTagName('select').value)

let chosenPosts = []

function handleCategoryChange (chosenCategory) {
    //to make the container empty before displaying the recent chosen posts
    document.getElementById('cards-container').innerHTML = ""
    //back lastPostTracker value to 3
    lastPostTracker = 3
    //empty chosenPosts array before pushing new selected posts to display
    chosenPosts = []
    //looping through posts to find the chosen posts to display
    for(i=0;i<posts.length;i++) {
        if(posts[i].category == chosenCategory) {
            chosenPosts.push(posts[i])
        }
        else if(chosenCategory == "allPosts") {
            chosenPosts = posts;
            const card = document.createElement('div')
            card.classList.add('card')
            const title = document.createElement('div')
            title.innerHTML = posts[i].title
            const image = document.createElement('img')
            image.src = posts[i].image
            const description = document.createElement('section')
            description.innerHTML = posts[i].description
            const date = document.createElement('div')
            date.innerHTML = posts[i].date

            card.appendChild(title)
            card.appendChild(image)
            card.appendChild(description)
            card.appendChild(date)

            //styling the dynamically created elements
            card.style.justifyContent = "center"
            card.style.justifySelf = "center"
            card.style.display = "flex"
            card.style.flexDirection = "column"
            
            card.style.borderRadius = "10px"
            card.style.padding = "10px"
            card.style.width = "90%"
            card.style.marginTop = "30px"
            card.style.gap = "5px"
            card.style.color = "#203c34"
            card.style.boxShadow = "-5px 5px 15px 5px #9d9d9d"
            image.style.height = "170px"
            title.style.fontWeight = "600"
            title.style.fontSize = "18px"
            date.style.marginLeft = "auto"
            document.getElementById('cards-container').style.display = "flex"
            document.getElementById('cards-container').style.flexDirection = "column"
            //appending chosen posts cards to the container inside the HTML file
            document.getElementById('cards-container').appendChild(card)
            document.getElementById('cards-container').style.paddingBottom = "10px"
            document.getElementById("page-change-btns").style.gap = "10px"
        }
    }
    
    for(i=0;i<chosenPosts.length;i++) {
        console.log(chosenPosts)
        if(chosenPosts) {
            const card = document.createElement('div')
    card.classList.add('card')
    const title = document.createElement('div')
    title.innerHTML = chosenPosts[i].title
    const image = document.createElement('img')
    image.src = chosenPosts[i].image
    const description = document.createElement('section')
    description.innerHTML = chosenPosts[i].description
    const date = document.createElement('div')
    date.innerHTML = chosenPosts[i].date

    card.appendChild(title)
    card.appendChild(image)
    card.appendChild(description)
    card.appendChild(date)

    //styling the dynamically created elements
    card.style.justifyContent = "center"
    card.style.justifySelf = "center"
    card.style.display = "flex"
    card.style.flexDirection = "column"
    
    card.style.borderRadius = "10px"
    card.style.padding = "10px"
    card.style.width = '20rem'
    card.style.height = "22rem"
    card.style.marginTop = "30px"
    card.style.gap = "5px"
    card.style.color = "#203c34"
    card.style.boxShadow = "-5px 5px 15px 5px #9d9d9d"
    image.style.height = "170px"
    title.style.fontWeight = "600"
    title.style.fontSize = "18px"
    date.style.marginLeft = "auto"
    date.style.marginTop = "auto"
    document.getElementById('cards-container').style.display = "flex"
    document.getElementById('cards-container').style.flexDirection = "column"
    //appending chosen posts cards to the container inside the HTML file
    document.getElementById('cards-container').appendChild(card)
    document.getElementById('cards-container').style.paddingBottom = "10px"
        } else {
            break;
        }
        
    }
    return chosenCategory;
}

//function to handle routes to next posts
function navToNext() {
    //empty cards container from posts to display next posts
    document.getElementById('cards-container').innerHTML = ''
    for(j=0;j<`${chosenPosts.length/3==0?chosenPosts.length/3:(chosenPosts.length/3)+1}`;j++) {
        for(i=lastPostTracker;i<lastPostTracker+3;i++) {
            if(chosenPosts.length<3) {
                break;
            } else {
                const card = document.createElement('div')
            card.classList.add('card')
            const title = document.createElement('div')
            title.innerHTML = posts[i].title
            const image = document.createElement('img')
            image.src = posts[i].image
            const description = document.createElement('section')
            description.innerHTML = posts[i].description
            const date = document.createElement('div')
            date.innerHTML = posts[i].date
        
            card.appendChild(title)
            card.appendChild(image)
            card.appendChild(description)
            card.appendChild(date)
        
            //styling the dynamically created elements
            
            card.style.justifySelf = "center"
            card.style.display = "flex"
            card.style.flexDirection = "column"
                    
            card.style.borderRadius = "10px"
            card.style.padding = "10px"
            card.style.width = '20rem'
            card.style.height = "22rem"
            card.style.marginTop = "30px"
            card.style.gap = "5px"
            card.style.color = "#203c34"
            card.style.boxShadow = "-5px 5px 15px 5px #9d9d9d"
            image.style.height = "170px"
            title.style.fontWeight = "600"
            title.style.top="0px"
            title.style.fontSize = "18px"
            date.style.marginLeft = "auto"
            date.style.marginTop ="auto"
            document.getElementById('cards-container').style.display = "flex"
            document.getElementById('cards-container').style.flexDirection = "column"
            //appending chosen posts cards to the container inside the HTML file
            document.getElementById('cards-container').appendChild(card)
            document.getElementById('cards-container').style.paddingBottom = "10px"
            }
            
            }
        }
        lastPostTracker = lastPostTracker + 3
    }
