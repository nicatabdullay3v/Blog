// import React, { useEffect, useState } from 'react'
// import "./Blogs.scss"
// import NavBar from '../NavBar/NavBar'
// import { useSelector, useDispatch } from 'react-redux'
// import { fetchUserById } from '../../redux/Slice/Blogs/Blogs'
// import { v4 as uuidv4 } from 'uuid';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTrash } from '@fortawesome/free-solid-svg-icons'
// import axios from 'axios'
// import { faEdit } from '@fortawesome/free-regular-svg-icons'

// const Blogs = () => {
//   const [editId, setEditId] = useState(0)
//   const [open, setOpen] = useState(false)
//   const blogs = useSelector((state) => state.blogs.blogs)
//   const [inputValue, setinputValue] = useState('')
//   const [sortedblogs, setsortedblogs] = useState([])

//   const [searchValue, setSearchValue] = useState("")
//   const dispatch = useDispatch()
//   useEffect(() => {
//     dispatch(fetchUserById())
//   }, [])

//   let filteredData = searchValue == "" ? blogs.blogs : blogs.blogs?.filter((x) => x.blog.toLowerCase().trim() === searchValue.toLowerCase().trim())
//   console.log(filteredData);

//   return (<>
//     <NavBar />
//     <section id='blogs'>
//       <div className="container">
//         <div className="blogs_title">
//           <h1>   My Blogs</h1>
//         </div>
//         <div className="search">
//           <input onChange={(e) => {
//             setSearchValue(e.target.value)
//             console.log(searchValue);
//           }} type="text" />
//         </div>
//         <div className="sort">
//           <button onClick={() => {


//           }}>
//             Sort
//           </button>

//         </div>
//         <div className="blogs_boxs">

//           {filteredData && filteredData.map((elem) => {
//             return <>

//               <div key={uuidv4()} className="blog_box">
//                 {elem.blog}
//                 <div className="delete_button">
//                   <FontAwesomeIcon id={elem.id} onClick={() => {
//                     axios.patch('http://localhost:3000/user/1', {
//                       blogs: blogs.blogs.filter((x) => x.id != elem.id)
//                     }).then(() => {
//                       dispatch(fetchUserById())
//                     })

//                   }} className='button' icon={faTrash} />
//                   <FontAwesomeIcon id={elem.id} onClick={() => {
//                     setOpen(open === true ? false : true)
//                     let perviousBlog = blogs.blogs.find((x) => x.id == elem.id).blog
//                     let nextBlog = perviousBlog
//                     setinputValue(blogs.blogs.find((x) => x.id == elem.id).blog)
//                     console.log(nextBlog);
//                     setEditId(elem.id)

//                   }} className='button' style={{ marginLeft: "10px" }} icon={faEdit} />
//                 </div>

//               </div>
//             </>
//           })}

//           {open === true ? <div className="edit">
//             <textarea style={{ width: "400px", height: "400px" }} onChange={(e) => {
//               setinputValue(e.target.value)
//             }} value={inputValue} type="text" />
//             <br />
//             <button style={{ padding: "10px 12px" }} onClick={() => {

//               axios.patch(`http://localhost:3000/user/1`, {
//                 blogs: blogs.blogs.map((blog) => {
//                   if (blog.id === editId) {
//                     return { ...blog, blog: inputValue };
//                   }
//                   return blog;
//                 }),
//               }).then(() => {
//                 dispatch(fetchUserById());
//                 setOpen(false);
//               });
//             }}>
//               edit
//             </button>
//           </div> : null}

//         </div>
//       </div>

//     </section>

//   </>

//   )
// }

// export default Blogs
import React, { useEffect, useState } from 'react'
import "./Blogs.scss"
import NavBar from '../NavBar/NavBar'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUserById } from '../../redux/Slice/Blogs/Blogs'
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { faEdit } from '@fortawesome/free-regular-svg-icons'

const Blogs = () => {
  const [searchValue, setSearchValue] = useState("")

  const [editId, setEditId] = useState(0)
  const [open, setOpen] = useState(false)
  const blogs = useSelector((state) => state.blogs.blogs)
  const [inputValue, setinputValue] = useState('')
  const [sortedblogs, setsortedblogs] = useState([])
  const [filteredData, setfilteredData] = useState(blogs.blogs)

  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(fetchUserById())

  }, [])
  useEffect(() => {
    setfilteredData(
      searchValue == "" ? blogs.blogs : blogs.blogs?.filter((x) => x.blog.toLowerCase().trim().includes(searchValue.toLowerCase().trim()))
    )
  }, [searchValue, blogs.blogs])

  console.log(filteredData);

  console.log(searchValue);
  return (<>
    <NavBar />
    <section id='blogs'>
      <div className="container">
        <div className="blogs_title">
          <h1>   My Blogs</h1>
        </div>
        <div className="search">
          <input onChange={(e) => {
            setSearchValue(e.target.value)

          }} type="text" />
        </div>
        <div className="sort">
          <button onClick={() => {
            setfilteredData([...filteredData].sort((a, b) => a.blog.localeCompare(b.blog)))
            console.log(filteredData);
          }}>
            Sort
          </button>

        </div>
        <div className="blogs_boxs">

          {filteredData && filteredData.map((elem) => {
            return <>

              <div key={uuidv4()} className="blog_box">
                {elem.blog}
                <div className="delete_button">
                  <FontAwesomeIcon id={elem.id} onClick={() => {
                    axios.patch('http://localhost:3000/user/1', {
                      blogs: blogs.blogs.filter((x) => x.id != elem.id)
                    }).then(() => {
                      dispatch(fetchUserById())
                    })

                  }} className='button' icon={faTrash} />
                  <FontAwesomeIcon id={elem.id} onClick={() => {
                    setOpen(open === true ? false : true)
                    let perviousBlog = blogs.blogs.find((x) => x.id == elem.id).blog
                    let nextBlog = perviousBlog
                    setinputValue(blogs.blogs.find((x) => x.id == elem.id).blog)
                    console.log(nextBlog);
                    setEditId(elem.id)

                  }} className='button' style={{ marginLeft: "10px" }} icon={faEdit} />
                </div>

              </div>
            </>
          })}

          {open === true ? <div className="edit">
            <textarea style={{ width: "400px", height: "400px" }} onChange={(e) => {
              setinputValue(e.target.value)
            }} value={inputValue} type="text" />
            <br />
            <button style={{ padding: "10px 12px" }} onClick={() => {

              axios.patch(`http://localhost:3000/user/1`, {
                blogs: blogs.blogs.map((blog) => {
                  if (blog.id === editId) {
                    return { ...blog, blog: inputValue };
                  }
                  return blog;
                }),
              }).then(() => {
                dispatch(fetchUserById());
                setOpen(false);
              });
            }}>
              edit
            </button>
          </div> : null}

        </div>
      </div>

    </section>

  </>

  )
}

export default Blogs