import React, { useCallback, useState } from 'react'
import CreateUserLayout from '../../layouts/CreateUserLayout'
import { useNavigate } from 'react-router-dom';
import StackViewerNavTab from '../../components/stackViewerNavTab/StackViewerNavTab';
import Stepper from '../../components/stepper/Stepper';
import UserCreation from '../../components/UserCreation/UserCreation';

const CreateUser = () => {

    const navigate = useNavigate();

    const [stepNumber, setStepNumber] = useState(0);
    let stepperInfo = ['User','Connect','Service','Fingerprint'];
    let creationPageImage = ['UserInfo','UserConnect','UserService','UserSecurity'];

    const createUserPageReload = useCallback(() => {
        setStepNumber(0);
    });

  return (
    <>
        <CreateUserLayout 
            CreateUserType="CreateSystemUser"
            CreateUserHeader={
                {
                    CreateUserNavTab: StackViewerNavTab, 
                    CreateUserNavigator: navigate,
                    CreateUserReloader: createUserPageReload,
                    CreateUserTitle: "Create User:", 
                }
            }
            CreateUserBody={
                {
                    CreateUserCard: UserCreation,
                    CreateUserCardImageData: creationPageImage,
                    CreateUserCardAction: "",
                    CreateUserCardNoData: "",
                }
            }
            CreateUserFooter={
                {
                    CreateUserStepper: Stepper,
                    CreateUserStepperInfo: stepperInfo,
                    CreateUserStepperState: stepNumber,
                    CreateUserStepperFunction: setStepNumber,
                }
            }
        />
    </>
  )
}

export default CreateUser