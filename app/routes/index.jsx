import { useLoaderData } from "@remix-run/react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const WrapImages = styled.section`
  max-width: 70rem;
  margin: 4rem auto;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 300px;
`;

const Loading = styled.div`
  text-align: center;

  .lds-ellipsis {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-ellipsis div {
    position: absolute;
    top: 33px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: #222;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  .lds-ellipsis div:nth-child(1) {
    left: 8px;
    animation: lds-ellipsis1 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(2) {
    left: 8px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(3) {
    left: 32px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(4) {
    left: 56px;
    animation: lds-ellipsis3 0.6s infinite;
  }
  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  }
`;

export const Loader = () => {
  return (
    <Loading>
      <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </Loading>
  )
};

export const Photos = ({ url, key }) => {
  return <Img src={url} key={key} alt="" />
}

export default function Index() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    loader();
  }, []);

  const loader = () => {
    const rootAPI = "https://api.unsplash.com";
    const accessKey = process.env.API_ACCESS_KEY;
  
    axios
      .get(`${rootAPI}/photos/random?client_id=${accessKey}&count=10`)
      .then(res => setImages([...images, ...res.data]))
  }

  return (
    <div>
      <InfiniteScroll
        dataLength={images.length}
        next={loader}
        hasMore={true}
        loader={<Loader />}
      >
        <WrapImages>
          {images.map(image => (
              <Photos url={image.urls.thumb} key={image.id} />
          ))}
        </WrapImages>
      </InfiniteScroll>
    </div>
  );
}
