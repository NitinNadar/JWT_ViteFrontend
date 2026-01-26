import { useState } from 'react';
import '../css/CreateUserLayout.css';
import Stepper from '../components/stepper/Stepper';

const CreateUserLayout = (props) => {

  const [number, setNumber] = useState(0);

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
          <button onClick={() => setNumber((old) => old > 0 ? old - 1 : 0)}>back</button>
          <button onClick={() => setNumber((old) => old + 1)}>Next</button>
        </section>
        <footer className='create-user-layout-footer'>
          <Stepper totalScreen={4} stepNumber={number} />
        </footer>
    </main>
  )
}

export default CreateUserLayout;