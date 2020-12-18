import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid' //npm安装uuid 这个插件，用来随机生成不重复的id编码
import NewSongForm from './NewSongForm'

export default function SongList() {
  // 1.useState是一个函数，返回两个值，返回一个原始数组和修改后的数组
  const [songs, setSongs] = useState([
    { title: 'Lemon', id: 1 },
    { title: '打上花火', id: 2 },
    { title: '青花瓷', id: 3 }
  ])

  const addSong = (title) => {
    setSongs([...songs, { title: title, id: uuidv4() }])
  }

  return (
    <div className='song-list' >
      <ul>
        {songs.map(item => {
          return (
            <li key={item.id}>{item.title}</li>
          )
        })}
      </ul>
      <NewSongForm addSong={addSong} />
    </div>
  )
}
