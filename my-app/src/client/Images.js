import React, {useEffect, useState} from 'react'

export default function Images(props) {
    const [imageSrc, setImageSrc] = useState("");
    useEffect(()=>{
        const reader = new FileReader();
        reader.readAsDataURL(props.blob);
        reader.onloadend = function () {
            setImageSrc(reader.result)
        }
    }, [props.blob])
  return (
 
        <img style={{width: 150, height: "auto"  }} src={imageSrc}  alt={props.fileName} />
  )
}
