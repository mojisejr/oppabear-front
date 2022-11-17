import Head from "next/head";

import Header from "../components/Header";
import ImageBox from "../components/ImageBox";
import Inventory from "../components/Inventory";
import Button from "../components/Button";
import BeforeConnect from "../components/beforeConnect";
import LoadingPage from "../components/loading";

import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { useGetTokenOfOwner } from "../blockchain/aggregates/get.TokenOfOwner";
import { useAppContext } from "../hooks/context";
import { useApprove } from "../blockchain/aggregates/approve.token";
import { useFusion } from "../blockchain/aggregates/fusion";
import { EventApproval } from "../blockchain/events/approval.event";
import { EventFusioned } from "../blockchain/events/fusioned.event";

import CongratModal from "../components/congrat.modal";
import OnlyDesktopPage from "../components/onlyDesktop";

function HomeV2() {
  const [loading, setLoading] = useState(false);
  const { address } = useAccount();
  const [approved, setApprove] = useState(false);
  const [fusioned, setFusioned] = useState(false);
  const { setSelectedMain, setSelectedSub, main, sub } = useAppContext();
  const { hostURIs, stimulusURIs } = useGetTokenOfOwner(address);
  const { approveHost, approveStimulus, isApproved } = useApprove(main, sub);
  const { fusion, isFusioned } = useFusion(main, sub);
  const approveEvent = EventApproval();
  const fusionEvent = EventFusioned();

  useEffect(() => {
    console.log("isApproved", isApproved, approveEvent.approval);
    if (isApproved && approveEvent.approval) {
      setApprove(true);
      setLoading(false);
    }

    console.log("isFusioned", isFusioned, fusionEvent.fusional);

    if (isFusioned && fusionEvent.fusional) {
      setFusioned(true);
      setLoading(false);
    }
  }, [isApproved, approveEvent.approval, isFusioned, fusionEvent.fusional]);

  return (
    <div className="relative bg-gradient-to-b from-[#1A2B45] to-slate-800 min-h-screen overflow-auto">
      <Head>
        <title>Fusion Labs - Test</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {address ? (
        <div className="relative grid grid-rows-2">
          <div
            id="image-box-section"
            className="flex z-[10] justify-center space-x-[80px]"
          >
            <ImageBox sign={"+"} desc={"Select Oppa Gen.1"} imageSrc={main} />
            <ImageBox sign={"+"} desc={"Select Serum"} imageSrc={sub} />
          </div>
          <div
            id="nft-inventory-container"
            className="relative flex justify-center"
          >
            {hostURIs.length && stimulusURIs.length ? (
              <div className="flex justify-center">
                {!approved ? (
                  <Button
                    name={"Approve"}
                    fn={() => {
                      if (sub && main) {
                        setLoading(true);
                        approveHost();
                        approveStimulus();
                      } else {
                        alert("nothing approved .");
                      }
                    }}
                  />
                ) : (
                  <Button
                    name={"Fusion"}
                    fn={() => {
                      setLoading(true);
                      setApprove(false);
                      fusion();
                    }}
                  />
                )}
              </div>
            ) : null}
            <div
              id="nft-inventory-panel"
              className="absolute top-[-20%] w-[65%] xl:w-[60%] 2xl:w-[43%] bg-gradient-to-b from-[#0E1937] text-white  rounded-t-[50px] shadow-[10px_-20px_30px_-15px_rgba(0,0,0,1)]"
            >
              <div
                id="your-wallet-label"
                className="absolute text-black top-[25%] left-[-1%] text-xl text-center pt-3 pb-3 pr-10 pl-4 bg-[#F0CC52] rounded-r-[100px] shadow-xl"
              >
                Your Wallet
              </div>
              <div
                id="nft-inventory-grid"
                className="grid grid-cols-2 gap-x-0 h-[100%] pt-[22%] pb-[30px]"
              >
                <Inventory
                  imageData={hostURIs.map((uri) => JSON.parse(uri))}
                  fn={setSelectedMain}
                  desc="no gen 1 in your wallet"
                />
                <Inventory
                  imageData={stimulusURIs.map((uri) => JSON.parse(uri))}
                  desc="no serum in your wallet"
                  fn={setSelectedSub}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <BeforeConnect />
      )}
      {fusioned ? <CongratModal /> : null}
      <div className="lg:hidden">
        <OnlyDesktopPage />
      </div>
      {loading ? <LoadingPage /> : null}
    </div>
  );
}

export default HomeV2;
