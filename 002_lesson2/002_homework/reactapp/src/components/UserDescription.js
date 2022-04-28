import React,{useEffect} from 'react'

function UserDescription({user , getUserPostsById}) {
    function salam(){getUserPostsById(user.id)}
    
    useEffect(() => {
        document.getElementById("rec").innerHTML = ''
        function foo(object, addTo = document.getElementById("rec")){
            let ul = document.createElement("ul");
            for (const key in object) {
                if (Object.hasOwnProperty.call(object, key)) {
                    const element = object[key];
                    addTo.append(ul);
                    if(typeof element === "object"){
                        let li = document.createElement("li");
                        ul.append(li);
                        foo(element,li);
                    } else {
                        let li = document.createElement("li");
                        li.classList.add("goDark")
                        li.classList.add("desc")
                        let h4 = document.createElement("h4");
                        ul.append(li);
                        li.append(h4);
                        h4.innerText = key + " : "+ element;
                    }
                }
            }
        }
        foo(user);
    }, [user])
    
    return (
        <>
            {/* <h2 className='goDark desc'>User Description</h2>
            <h3 className='goDark desc'>User Id : {user.id}</h3>
            <h3 className='goDark desc'>User Name : {user.name}</h3> */}
            <h3 id="rec"/>
            <button onClick={salam}>Get User Posts</button>
        </>
    )
}

export default UserDescription