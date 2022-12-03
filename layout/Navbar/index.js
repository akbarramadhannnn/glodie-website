import React, { useCallback, useState } from "react";
import MyAlgoConnect from "@randlabs/myalgo-connect";
import styled from "styled-components";
import tw from "twin.macro";
import Link from "next/link";
import { useRouter } from "next/router";
import LogoSvg from "../../public/svg/logo-home.svg";
import WalletSvg from "../../public/svg/wallet.svg";
import BurgerSvg from "../../public/svg/menu-burger-bar.svg";
import CloseSvg from "../../public/svg/x.svg";
import { Modal } from "../../components";

const Navbar = styled.div`
  ${tw`shadow-sm w-full z-10`}
`;

const Container = styled.div`
  ${tw`bg-orange1`}
`;

const MenuWrapper = styled.div`
  ${tw`
    flex justify-between items-center w-full h-14 md:h-32 lg:h-24 pl-5 pr-5 lg:pl-16 lg:pr-16 xl:pl-40 xl:pr-40
  `}
`;

const FlexMenu = styled.div`
  ${tw`
    w-8/12 flex justify-between hidden lg:block
  `}
`;

const WFull = styled.div`
  ${tw`w-full`}
`;

const ListWrapper = styled.ul`
  ${tw`flex justify-between items-center`}
`;

const MenuList = styled.li`
  list-style-type: none;

  a {
    ${tw`text-2xl md:text-5xl lg:text-xl font-bold`}
    text-decoration: none;
    ${(props) => (props.isRouter ? tw`text-pink1` : tw`text-purple1`)}
  }
`;

const ButtonWrapperMobile = styled.div`
  ${tw`lg:hidden`}
`;

const ButtonMobile = styled.button`
  ${tw`bg-transparent inline-flex items-center justify-center p-2 rounded-md text-white -mr-4`}
  border: none;
`;

const ButtonConnect = styled.button`
  ${tw`w-40 md:w-20xl lg:w-40 xl:w-40 h-12 md:h-24 lg:h-12 xl:h-12 rounded-lg md:rounded-xl lg:rounded-lg xl:rounded-lg bg-pink1 flex justify-between items-center text-white text-2xl md:text-5xl lg:text-2xl xl:text-2xl font-bold pl-3 pr-3 md:pl-5 md:pr-5 lg:pl-3 lg:pr-3 xl:pl-3 xl:pr-3 border-0`}
`;

const Index = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handlePressLink = useCallback(
    async (e, link) => {
      e.preventDefault();
      if (link === "/team") {
        router.push(link);
      } else if (link === "/roadmap") {
        router.push(link);
      } else if (link === "/charity") {
        router.push(link);
      } else {
        setIsOpenModal(true);
      }

      // else if (link === "/connect") {
      //   const myAlgoConnect = new MyAlgoConnect();
      //   const accountsSharedByUser = await myAlgoConnect.connect();
      //   console.log("accountsSharedByUser", accountsSharedByUser);
      // }
    },
    [router]
  );

  const handleClickDrawer = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <>
      <Navbar>
        <Container>
          <MenuWrapper>
            <Link href="/">
              <LogoSvg className="w-11 h-11 md:w-6xl md:h-6xl lg:w-20 lg:h-20" />
            </Link>

            <FlexMenu>
              <WFull>
                <ListWrapper>
                  <MenuList isRouter={router.pathname === "/team"}>
                    <Link
                      href="/#"
                      onClick={(e) => handlePressLink(e, "/team")}
                    >
                      Team
                    </Link>
                  </MenuList>
                  <MenuList isRouter={router.pathname === "/roadmap"}>
                    <Link
                      href="/#"
                      onClick={(e) => handlePressLink(e, "/roadmap")}
                    >
                      Roadmap
                    </Link>
                  </MenuList>
                  <MenuList isRouter={router.pathname === "/charity"}>
                    <Link
                      href="/#"
                      onClick={(e) => handlePressLink(e, "/charity")}
                    >
                      Charity
                    </Link>
                  </MenuList>
                  <MenuList className="text-purple1">
                    <Link
                      href="/#"
                      onClick={(e) => handlePressLink(e, "/leaderboards")}
                    >
                      Leaderboards
                    </Link>
                  </MenuList>
                  <ButtonConnect
                    className=""
                    onClick={(e) => handlePressLink(e, "/connect")}
                  >
                    <WalletSvg />
                    Connect
                  </ButtonConnect>
                </ListWrapper>
              </WFull>
            </FlexMenu>

            <ButtonWrapperMobile>
              <ButtonMobile
                onClick={handleClickDrawer}
                type="button"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <BurgerSvg className="w-11 h-11 md:w-6xl md:h-6xl lg:w-20 lg:h-20" />
              </ButtonMobile>
            </ButtonWrapperMobile>
          </MenuWrapper>
        </Container>
      </Navbar>

      {isOpen && (
        <div
          className="fixed top-0 h-full w-full z-50"
          style={{
            backgroundColor: "rgba(3,1,18, .6)",
          }}
        >
          <div className="fixed bg-orange1 w-4/6 h-full right-0">
            <ul className="pl-6 pr-6 h-22xl md:h-44xl flex flex-col justify-between mt-6">
              <div className="self-end">
                <button onClick={handleClickDrawer}>
                  <CloseSvg className="w-8 h-8 sm:w-8 sm:h-8 md:w-16 md:h-16" />
                </button>
              </div>

              <MenuList isRouter={router.pathname === "/team"}>
                <Link
                  href="/#"
                  onClick={(e) => {
                    handlePressLink(e, "/team");
                    handleClickDrawer();
                  }}
                >
                  Team
                </Link>
              </MenuList>
              <MenuList isRouter={router.pathname === "/roadmap"}>
                <Link
                  href="/#"
                  onClick={(e) => {
                    handlePressLink(e, "/roadmap");
                    handleClickDrawer();
                  }}
                >
                  Roadmap
                </Link>
              </MenuList>
              <MenuList isRouter={router.pathname === "/charity"}>
                <Link
                  href="/#"
                  onClick={(e) => {
                    handlePressLink(e, "/charity");
                    handleClickDrawer();
                  }}
                >
                  Charity
                </Link>
              </MenuList>
              <MenuList className="text-purple1">
                <Link
                  href="/#"
                  onClick={(e) => {
                    handlePressLink(e, "/leaderboards");
                    handleClickDrawer();
                  }}
                >
                  Leaderboards
                </Link>
              </MenuList>
              <ButtonConnect
                className=""
                onClick={(e) => {
                  handlePressLink(e, "/connect");
                  handleClickDrawer();
                }}
              >
                <WalletSvg />
                Connect
              </ButtonConnect>
            </ul>
          </div>
        </div>
      )}

      <Modal
        isOpen={isOpenModal}
        title="Oops!"
        description="We’re still cooking up this feature on the Glodie lab, please wait. For more info, contact us on Discord ;)"
        onClick={() => {
          setIsOpenModal(!isOpenModal);
        }}
        btnText="Okay, got it"
      />
    </>
  );
};

export default Index;
