import '../css/CreateUserLayout.css';

const CreateUserLayout = (props) => {

  return (
    <main className='create-user-layout select-text-disable'>
        <nav className='create-user-layout-navbar'>
          {props?.CreateUserType === "CreateSystemUser" 
          ? (
              <>
                <props.CreateUserHeader.CreateUserNavTab navtablabel={{nav: "Back", reload: "Reload", containerTitle: props?.CreateUserHeader?.CreateUserTitle }} StackViewerNavigator={props?.CreateUserHeader?.CreateUserNavigator} StackViewerReloader={props?.CreateUserHeader?.CreateUserReloader} />
              </>
            ) 
          : (<></>)}
        </nav>
        <section className='create-user-layout-body'>
          {props?.CreateUserType === "CreateSystemUser" 
          ? (
              <>
                <props.CreateUserBody.CreateUserCard operations={props?.CreateUserFooter?.CreateUserStepperFunction} imageInfo={props?.CreateUserBody?.CreateUserCardImageData} stepNumber={props?.CreateUserFooter?.CreateUserStepperState}/>
              </>
            ) 
          : (<></>)}          
        </section>
        <footer className='create-user-layout-footer'>
          {props?.CreateUserType === "CreateSystemUser" 
          ? (
              <>
                <props.CreateUserFooter.CreateUserStepper totalScreen={props?.CreateUserFooter?.CreateUserStepperInfo?.length} stepperInfo={props?.CreateUserFooter?.CreateUserStepperInfo} stepNumber={props?.CreateUserFooter?.CreateUserStepperState} />
              </>
            ) 
          : (<></>)}
        </footer>
    </main>
  )
}

export default CreateUserLayout;