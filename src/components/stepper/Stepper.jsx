import React from 'react'
import '../../css/Stepper.css';

const Stepper = (props) => {

    let totalPage = Array.from({ length: props?.totalScreen }, (_, i) => i + 1);

  return (
    <>
        <main className='stepper-container'>
            {totalPage?.map((number, index) => {
                return (
                <>
                    <div className='stepper-container-one' key={index}>
                    {props?.stepNumber >= number ? <img className='stepper-check' alt='stepper-check' src={new URL(`../../assets/InformationIcon/Check.png`, import.meta.url).href}/> : number}
                    </div>
                    {
                        number === props?.totalScreen 
                        ? <></> 
                        : <>
                            <div className={'stepper-container-space'} key={index}>
                            <div className={props?.stepNumber >= number ? 'stepper-container-true' : ''}></div>
                            </div>
                          </>
                    }
                </>
            )
            })}
            {/* <div className='stepper-container-one'>
              {props?.stepNumber >= 1 ? <img className='stepper-check' alt='stepper-check' src={new URL(`../../assets/InformationIcon/Check.png`, import.meta.url).href}/> : 1}
            </div>
            <div className={'stepper-container-space'}>
              <div className={props?.stepNumber >= 1 ? 'stepper-container-true' : ''}></div>
            </div>
            <div className='stepper-container-two'>
              {props?.stepNumber >= 2 ? <img className='stepper-check' alt='stepper-check' src={new URL(`../../assets/InformationIcon/Check.png`, import.meta.url).href}/> : 2}
            </div>
            <div className={'stepper-container-space'}>
              <div className={props?.stepNumber >= 2 ? 'stepper-container-true' : ''}></div>
            </div>
            <div className='stepper-container-three'>
              {props?.stepNumber >= 3 ? <img className='stepper-check' alt='stepper-check' src={new URL(`../../assets/InformationIcon/Check.png`, import.meta.url).href}/> : 3}
            </div>
            <div className={'stepper-container-space'}>
              <div className={props?.stepNumber >= 3 ? 'stepper-container-true' : ''}></div>
            </div>
            <div className='stepper-container-four'>
              {props?.stepNumber >= 4 ? <img className='stepper-check' alt='stepper-check' src={new URL(`../../assets/InformationIcon/Check.png`, import.meta.url).href}/> : 4}
            </div> */}
        </main>
    </>
  )
}

export default Stepper