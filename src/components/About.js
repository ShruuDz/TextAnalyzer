import React from 'react'


export default function About(props) {

  return (
    <>
    <div className='container-fluid mb-5' style={{color: props.mode ==='dark'? 'white':'#243743'}}>
    <h1 className='text-center m-4' style={{color: props.mode ==='dark'? 'white':'#243743'}}>About Us</h1>
    <div className="accordion accordion-flush" id="accordionFlushExample" style={{backgroundColor: props.mode ==='dark'? '#243743':'white' ,color: props.mode ==='dark'? 'white':'#243743', borderColor:props.mode ==='dark' ? 'white':'#243743'}}>
        <div className="accordion-item" style={{backgroundColor: props.mode ==='dark'? '#243743':'white' ,color: props.mode ==='dark'? 'white':'#243743', borderColor:props.mode ==='dark' ? 'white':'#243743'}}>
            <h2 className="accordion-header" >
            <button className="accordion-button collapsed"  type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" style={{backgroundColor: props.mode ==='dark'? '#243743':'white' ,color: props.mode ==='dark'? 'white':'#243743', borderColor:props.mode ==='dark' ? 'white':'#243743'}}>
                Accordion Item #1
            </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body" >Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
            </div>
        </div>
        <div className="accordion-item"style={{backgroundColor: props.mode ==='dark'? '#243743':'white' ,color: props.mode ==='dark'? 'white':'#243743', borderColor:props.mode ==='dark' ? 'white':'#243743'}}>
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo" style={{backgroundColor: props.mode ==='dark'? '#243743':'white' ,color: props.mode ==='dark'? 'white':'#243743', borderColor:props.mode ==='dark' ? 'white':'#243743'}}>
                Accordion Item #2
            </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body" >Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
            </div>
        </div>
        <div className="accordion-item" style={{backgroundColor: props.mode ==='dark'? '#243743':'white' ,color: props.mode ==='dark'? 'white':'#243743', borderColor:props.mode ==='dark' ? 'white':'#243743'}}>
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree" style={{backgroundColor: props.mode ==='dark'? '#243743':'white' ,color: props.mode ==='dark'? 'white':'#243743', borderColor:props.mode ==='dark' ? 'white':'#243743'}}>
                Accordion Item #3
            </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body" >Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
            </div>
        </div>
    </div>
    {/* <div className="container">
        <button onClick={toggleChange} className='btn btn-primary my-4'>{btnText}</button>
    </div> */}
    </div>
    </>
  )
}
