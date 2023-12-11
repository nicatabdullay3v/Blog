import React, { useEffect, useState } from 'react'
import NavBar from "./../NavBar/NavBar"
import "./writeBlogs.scss"
import { useSelector, useDispatch } from 'react-redux'
import { fetchUserById, getvalue } from '../../redux/Slice/Blogs/Blogs'
import { PostBlog } from '../../redux/Slice/Blogs/Blogs'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'
const WriteBlogs = () => {
  const inputValue = useSelector((state) => state.blogs.textarea)
  console.log(inputValue);
  const [data, setData] = useState([])
  const dispatch = useDispatch()
  useEffect(() => {
    axios(`http://localhost:3000/user/1`).then((res) => {
      setData(res.data)
    })
  }, [fetchUserById()])

  console.log(data.blogs);
  return (
    <>
      <NavBar />
      <section id='write_blogs'>
        <div className="container">
          <div className="write_blogs_title">
            <h1 >
              Write Blogs
            </h1>
          </div>
          <div className="write_blogs">

            <form onSubmit={(e) => {
              e.preventDefault()
              dispatch(PostBlog({
                blogs: [...data.blogs,
                {
                  id: uuidv4(),
                  blog: inputValue
                }
                ]

              }))
              dispatch(getvalue(""))
              dispatch(fetchUserById())
            }} action="">
              <textarea value={inputValue} onChange={(e) => {
                dispatch(getvalue(e.target.value))

              }} name="" id="" cols="30" rows="10"></textarea>
              <input className='submit' type="submit" />
            </form>
          </div>
        </div>
      </section>
    </>

  )
}

export default WriteBlogs