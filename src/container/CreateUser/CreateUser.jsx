import React, { useCallback } from 'react'
import CreateUserLayout from '../../layouts/CreateUserLayout'
import { useNavigate } from 'react-router-dom';
import StackViewerNavTab from '../../components/stackViewerNavTab/StackViewerNavTab';

const CreateUser = () => {

    const navigate = useNavigate();

    const createUserPageReload = useCallback( async() => {
        await window.location.reload();
    }, []);

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
                    CreateUserCard: "",
                    CreateUserCardLoader: "",
                    CreateUserCardAction: "",
                    CreateUserCardNoData: "",
                }
            }
            CreateUserFooter={
                {
                    CreateUserPagination: "",
                    CreateUserPaginationLoader: "",
                    CreateUserPaginationPage: "",
                    CreateUserPaginationType: "",
                    CreateUserPaginationFunction: ""
                }
            }
        />
    </>
  )
}

export default CreateUser