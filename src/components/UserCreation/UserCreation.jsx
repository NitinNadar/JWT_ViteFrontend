import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import '../../css/UserCreation.css';
import { InputField } from '../../elements/InputField';
import { Button } from '@mui/material';

const UserCreation = (props) => {
    
  return (
    <>
          <main className='creation-screen'>
            <article className='creation-screen-action'>
                {
                    props?.imageInfo[props?.stepNumber] === "UserInfo" 
                    ? (
                    <>
                    <div className='creation-screen-userinfo'>
                        <InputField name={"username"} label={"User Name"} inputsize={"medium"} inputcolor={"#000000"} inputradius={"20px"} type={"text"} textcolor={"#000000"} textsize={"20px"} value={''} handleOnChange={() => {}} validation={false}/>
                        <InputField name={"name"} label={"Name"} inputsize={"medium"} inputcolor={"#000000"} inputradius={"20px"} type={"text"} textcolor={"#000000"} textsize={"20px"} value={''} handleOnChange={() => {}} validation={false}/>
                        <InputField name={"Orgnization"} label={"Orgnization"} inputsize={"medium"} inputcolor={"#000000"} inputradius={"20px"} type={"text"} textcolor={"#000000"} textsize={"20px"} value={''} handleOnChange={() => {}} validation={false}/>
                    </div>
                    </>
                ) 
                    : props?.imageInfo[props?.stepNumber] === "UserConnect"
                    ? (
                    <>
                    <div className='creation-screen-userinfo'>
                        <InputField name={"Contact Number"} label={"Contact Number"} inputsize={"medium"} inputcolor={"#000000"} inputradius={"20px"} type={"text"} textcolor={"#000000"} textsize={"20px"} value={''} handleOnChange={() => {}} validation={false}/>
                        <InputField name={"Email Id"} label={"Email Id"} inputsize={"medium"} inputcolor={"#000000"} inputradius={"20px"} type={"text"} textcolor={"#000000"} textsize={"20px"} value={''} handleOnChange={() => {}} validation={false}/>
                    </div>
                    </>
                ) 
                    : props?.imageInfo[props?.stepNumber] === "UserService"
                    ? (
                    <>
                    <div className='creation-screen-userinfo'>
                        <InputField name={"Services"} label={"Services"} inputsize={"medium"} inputcolor={"#000000"} inputradius={"20px"} type={"text"} textcolor={"#000000"} textsize={"20px"} value={''} handleOnChange={() => {}} validation={false}/>
                    </div>
                    </>
                ) 
                    : props?.imageInfo[props?.stepNumber] === "UserSecurity"
                    ? (
                    <>
                    <div className='creation-screen-userinfo'>
                        <InputField name={"Password"} label={"Password"} inputsize={"medium"} inputcolor={"#000000"} inputradius={"20px"} type={"text"} textcolor={"#000000"} textsize={"20px"} value={''} handleOnChange={() => {}} validation={false}/>
                        <InputField name={"Re-Type Password"} label={"Re-Type Password"} inputsize={"medium"} inputcolor={"#000000"} inputradius={"20px"} type={"text"} textcolor={"#000000"} textsize={"20px"} value={''} handleOnChange={() => {}} validation={false}/>
                    </div>
                    </>
                ) 
                    : (<></>)
                }
                <div className='creation-screen-validate'>
                    <Button variant="outlined" startIcon={<KeyboardArrowLeft />} onClick={() => props?.operations((old) => old > 0 ? old - 1 : 0)}>Previous</Button>
                    <Button variant="outlined" endIcon={<KeyboardArrowRight />} onClick={() => props?.operations((old) => old < props?.imageInfo?.length - 1 ? old + 1 : old)}>Next</Button>
                </div>
            </article>
            <article className='creation-screen-info'>
              <img className='creation-screen-info-img' alt='screen-info' src={
                  new URL(
                    `../../assets/appGraphic/${props?.imageInfo[props?.stepNumber]}.jpg`,
                    import.meta.url
                  ).href
                } />
            </article>
          </main>
    </>
  )
}

export default UserCreation