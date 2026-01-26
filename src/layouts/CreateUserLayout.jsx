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
          <main className='creation-screen'>
            <article className='creation-screen-action'>
              <button onClick={() => props?.CreateUserFooter?.CreateUserStepperFunction((old) => old > 0 ? old - 1 : 0)}>back</button>
              <button onClick={() => props?.CreateUserFooter?.CreateUserStepperFunction((old) => old + 1)}>Next</button>
            </article>
            <article className='creation-screen-info'>
              <img className='creation-screen-info-img' alt='screen-info' src={
                  new URL(
                    `../assets/appGraphic/UserInfo.jpg`,
                    import.meta.url
                  ).href
                } />
            </article>
          </main>
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