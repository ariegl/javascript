import React, {useRef, useImperativeHandle } from 'react'
import logo from "../assets/logoMunicipioCircle.jpg"
import html2canvas from "html2canvas"
import {jsPDF} from "jspdf";


function TemplateDocument(props , ref) {

    const myDiv = useRef(null)

    function generatePdf () {
        let data = myDiv.current;
        let doc = new jsPDF("landscape", "pt", "a4");

        html2canvas(data).then(function(canvas) {
            doc.addImage(canvas.toDataURL(), 'JPEG',0,0);
            doc.save("ARCHIVO XDDD")
        });

        console.log("DATA:",data);
    }

    useImperativeHandle(ref, () => ({
        generatePdf
    }));

  return (
    <div ref={myDiv} style={{width: '1130px', height: '800px', minWidth: '1130px', minHeight:'800px'}} className='text-black bg-white grid grid-cols-12 p-3 px-10 py-10'>
        <div className='col-span-12' id="header">
            <h1 className='text-5xl font-bold text-center m-1'>Preview Document</h1>
        </div>
        <div className='col-span-12 flex justify-center'>
            <img className='my-10' src={logo} width="300px" alt="" />
        </div>
        <br/>
        <div className='col-span-12'>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, dolores. Repellendus officiis, doloribus facilis at dignissimos dolorum quod, aperiam nihil suscipit, cum placeat ducimus explicabo vero repudiandae accusantium architecto quibusdam!</p>
        <br/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, iste earum. Officia velit deserunt dolores molestiae ea natus voluptatem vitae atque illum facilis, cupiditate earum odit animi laboriosam doloribus? Dolorum.</p>
        <br/>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit at, suscipit a, maiores esse minima nisi officiis harum ratione sint laboriosam, tempora adipisci dolorum in. Dignissimos veniam corporis maiores alias.</p>
        </div>
        <br/>
    </div>  
  )
}

export default React.forwardRef(TemplateDocument);