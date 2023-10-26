import React,{useState,useEffect} from 'react';
import Footer from './Footer';
import Aos from 'aos';
import "aos/dist/aos.css"
const Datadisplay = (props) => {

   Aos.init();
  

    console.log(props.product)
    const datatodisplay = props.product;

  return (
      <div className="">
        <img src={datatodisplay.url} width="100%" alt='carrers logo'></img>
       <div className="introdiv">
       <h1 className='text-primary careershead'>{datatodisplay.careers}</h1>
        <p>{datatodisplay.intro}</p>
        <div className='d-flex'>
              <div className="border rounded m-2 p-4 col-md-6 top-left" id="border1" data-aos="slide-right" data-aos-once="true" data-aos-duration="1500">
                <img src={datatodisplay.circle.url} height="60px" alt='Connection'></img>
                <p>{datatodisplay.circledescription}</p>
              </div>
              <div className="border rounded m-2 p-4 col-md-6 top-right" id="border1" data-aos="slide-left" data-aos-once="true" data-aos-duration="1300">
                <img src={datatodisplay.antina.url} height="60px" alt='CloudNetwork'></img>
                <p>{datatodisplay.antinadescription}</p>
              </div>
        </div>
        <div className='d-flex'>
              <div className="border rounded m-2 p-4 col-md-6 bg-white" id="border1" data-aos="slide-right" data-aos-once="true" data-aos-duration="1300">
                <img src={datatodisplay.computer.url} height="60px" alt='Computer'></img>
                <p>{datatodisplay.computerdescription}</p>
              </div>
              <div className="border rounded m-2 p-4 col-md-6" id="border1" data-aos="slide-left" data-aos-once="true" data-aos-duration="1300">
                <img src={datatodisplay.wifi.url} height="60px" alt='Rocket'></img>
                <p>{datatodisplay.wifidescription}</p>
              </div>
        </div>
            <h1 className="cropenings"><span className="text-primary">{datatodisplay.current}</span>&nbsp;<span className="text-danger">{datatodisplay.openings}</span></h1>
            <div className='d-flex m-2' data-Aos="slide-right" data-aos-once="true" data-aos-duration="1600">
            <div className='border border2 rounded p-1 m-1' id="border1">
              <div className='mb-2 d-flex flex-wrap'>
                <span className='border p-1 m-1'>{datatodisplay.ds1}</span>
                <span className='border p-1 m-1'>{datatodisplay.ds2}</span>
                <span className='border p-1 m-1'>{datatodisplay.ds3}</span>
                <span className='border p-1 m-1'>{datatodisplay.ds4}</span>
                <span className='border p-1 m-1'>{datatodisplay.ds5}</span>
                <span className='border p-1 m-1'>{datatodisplay.ds6}</span>
              </div>
              <h6 className='text-danger text-center'>{datatodisplay.dshead}</h6>
              <p className='m-4'>{datatodisplay.dsdescription}</p>
              <div className='text-center'><button className='btn-primary border-0 rounded p-2'>{datatodisplay.dsbutton}</button></div>
            </div>
            <div className='border border2 rounded p-1 m-1' id="border1">
              <div className='mb-2 d-flex flex-wrap'>
                <span className='border p-1 m-1'>{datatodisplay.ui1}</span>
                <span className='border p-1 m-1'>{datatodisplay.ui2}</span>
                <span className='border p-1 m-1'>{datatodisplay.ui3}</span>
                <span className='border p-1 m-1'>{datatodisplay.ui4}</span>
                <span className='border p-1 m-1'>{datatodisplay.ui5}</span>
                <span className='border p-1 m-1'>{datatodisplay.ui6}</span>
                <span className='border p-1 m-1'>{datatodisplay.ui7}</span>
              </div>
              <h6 className='text-danger text-center'>{datatodisplay.uihead}</h6>
              <p className='m-4'>{datatodisplay.uidescription}</p>
              <div className='text-center'><button className='btn-primary border-0 rounded p-2'>{datatodisplay.dsbutton}</button></div>
            </div>
            <div className='border border2 rounded p-1 m-1' id="border1">
              <div className='mb-2 d-flex flex-wrap'>
                <span className='border p-1 m-1'>{datatodisplay.md1}</span>
                <span className='border p-1 m-1'>{datatodisplay.md2}</span>
                <span className='border p-1 m-1'>{datatodisplay.md3}</span>
                <span className='border p-1 m-1'>{datatodisplay.md4}</span>
                <span className='border p-1 m-1'>{datatodisplay.md5}</span>
              </div>
              <h6 className='text-danger text-center'>{datatodisplay.mdhead}</h6>
              <p className='m-4'>{datatodisplay.mddescription}</p>
              <div className='text-center mb-1'><button className='btn-primary border-0 rounded p-2'>{datatodisplay.dsbutton}</button></div>
            </div>
          </div>

          <div className='d-flex m-2' data-Aos="slide-right" data-aos-once="true" data-aos-duration="1600">
            <div className='border border2 rounded p-1 m-1' id="border1">
              <div className='mb-2 d-flex flex-wrap'>
                <span className='border p-1 m-1'>{datatodisplay.aws1}</span>
                <span className='border p-1 m-1'>{datatodisplay.aws2}</span>
                <span className='border p-1 m-1'>{datatodisplay.aws3}</span>
                <span className='border p-1 m-1'>{datatodisplay.aws4}</span>
                <span className='border p-1 m-1'>{datatodisplay.aws5}</span>
                <span className='border p-1 m-1'>{datatodisplay.aws6}</span>
                <span className='border p-1 m-1'>{datatodisplay.aws7}</span>
              </div>
              <h6 className='text-danger text-center'>{datatodisplay.awshead}</h6>
              <p className='m-4'>{datatodisplay.awsdescription}</p>
              <div className='text-center'><button className='btn-primary border-0 rounded p-2'>{datatodisplay.dsbutton}</button></div>
            </div>
            <div className='border border2 rounded p-1 m-1' id="border1">
              <div className='mb-2 d-flex flex-wrap'>
                <span className='border p-1 m-1'>{datatodisplay.aa1}</span>
                <span className='border p-1 m-1'>{datatodisplay.aa2}</span>
                <span className='border p-1 m-1'>{datatodisplay.aa3}</span>
                <span className='border p-1 m-1'>{datatodisplay.aa4}</span>
                <span className='border p-1 m-1'>{datatodisplay.aa5}</span>
                <span className='border p-1 m-1'>{datatodisplay.aa6}</span>
              </div>
              <h6 className='text-danger text-center'>{datatodisplay.aahead}</h6>
              <p className='m-4'>{datatodisplay.aadescription}</p>
              <div className='text-center'><button className='btn-primary border-0 rounded p-2'>{datatodisplay.dsbutton}</button></div>
            </div>
            <div className='border border2 rounded p-1 m-1' id="border1">
              <div className='mb-2 d-flex flex-wrap'>
                <span className='border p-1 m-1'>{datatodisplay.dga1}</span>
                <span className='border p-1 m-1'>{datatodisplay.dga2}</span>
                <span className='border p-1 m-1'>{datatodisplay.dga3}</span>
                <span className='border p-1 m-1'>{datatodisplay.dga4}</span>
              </div>
              <h6 className='text-danger text-center'>{datatodisplay.dgahead}</h6>
              <p className='m-4'>{datatodisplay.dgadescription}</p>
              <div className='text-center mb-1'><button className='btn-primary border-0 rounded p-2'>{datatodisplay.dsbutton}</button></div>
            </div>
          </div>
          <div className='d-flex justify-content-around mt-5 mb-3 openingsmenu'>
            <button className='btn-primary border-0 p-2 rounded hyd'>{datatodisplay.hydopenings}</button>
            <button className='btn-primary border-0 p-2 rounded bang'>{datatodisplay.bangopenings}</button>
          </div>
            
       </div>
       <Footer datatodisplay={datatodisplay}/>
       
       
      </div>

  );
}
export default Datadisplay;