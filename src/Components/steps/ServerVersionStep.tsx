"use client";
import { useState, useEffect } from "react";
import { useServer } from "../../Utils/ServerContext";

interface ServerVersionStepProps {
  onNext: () => void;
  onBack: () => void;
}

const ServerVersionStep = ({ onNext, onBack }: ServerVersionStepProps) => {
  const { serverConfig, setServerConfig } = useServer();
  const [versions, setVersions] = useState<any[]>([]);
  const [selectedVersion, setSelectedVersion] = useState<string | null>(null);
  const [serverSelecteds, setServerSelecteds] = useState<any[]>([]);
  const [selectedServerName, setSelectedServerName] = useState<string | null>(null);
  const [selectedServerType, setSelectedServerType] = useState<string | null>(null);
  const [filtro, setFiltro] = useState<string | null>(null);

  console.log(serverConfig.type)


  // Obtener las versiones según el `serverName`
  const fetchServerData =  () => {   
    const fakeData = {
      server: {
        bedrock:[
          {
            "type": "bin-win",
            "version": "bedrock-server-1.21.51.02",
            "url": "https://www.minecraft.net/bedrockdedicatedserver/bin-win/bedrock-server-1.21.51.02.zip"
          },
          {
            "type": "bin-win-preview",
            "version": "bedrock-server-1.21.60.24",
            "url": "https://www.minecraft.net/bedrockdedicatedserver/bin-win-preview/bedrock-server-1.21.60.24.zip"
          },
          {
            "type": "bin-linux",
            "version": "bedrock-server-1.21.51.02",
            "url": "https://www.minecraft.net/bedrockdedicatedserver/bin-linux/bedrock-server-1.21.51.02.zip"
          },
          {
            "type": "bin-linux-preview",
            "version": "bedrock-server-1.21.60.24",
            "url": "https://www.minecraft.net/bedrockdedicatedserver/bin-linux-preview/bedrock-server-1.21.60.24.zip"
          }
        ],
        java: [
          {
            "id": "1.21.4",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/a3bcba436caa849622fd7e1e5b89489ed6c9ac63/1.21.4.json"
          },
          {
            "id": "1.21.4-rc3",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/67230d8d714f59953423f2db1fcfb042fe5dc05e/1.21.4-rc3.json"
          },
          {
            "id": "1.21.4-rc2",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/70837639aeab1162127d402fdef68d8fa365cd52/1.21.4-rc2.json"
          },
          {
            "id": "1.21.4-rc1",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/b36938455cb91bc58c7463de80909764036576a2/1.21.4-rc1.json"
          },
          {
            "id": "1.21.4-pre3",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/98876cfc479792ed3b263a5a1677d7f0a2f07ff8/1.21.4-pre3.json"
          },
          {
            "id": "1.21.4-pre2",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/8e1406eda6cafab4fa8a23394128fa5eac315b4a/1.21.4-pre2.json"
          },
          {
            "id": "1.21.4-pre1",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/49601a442dc76e981dbf5f89ff3fb8e2dd5f70bf/1.21.4-pre1.json"
          },
          {
            "id": "24w46a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/170f128ffeaa7942cc7b805b1a6972bcbae36c35/24w46a.json"
          },
          {
            "id": "24w45a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/a3080291a678959220fd37574a373783c08352c4/24w45a.json"
          },
          {
            "id": "24w44a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/688b43ac6bd21ead542754ca00612599dc3978c2/24w44a.json"
          },
          {
            "id": "1.21.3",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/0130b9c6d98a22d8688048e610243a2b42bddf14/1.21.3.json"
          },
          {
            "id": "1.21.2",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/740ce861f7e4f9db2cd50b2989680a04d8aac99c/1.21.2.json"
          },
          {
            "id": "1.21.2-rc2",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/5efabe5f83e0df351fc29701684eae6b99a83ba8/1.21.2-rc2.json"
          },
          {
            "id": "1.21.2-rc1",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/f5c8047cf8d166b9a9d521793f21fd0df60efe60/1.21.2-rc1.json"
          },
          {
            "id": "1.21.2-pre5",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/85e759f425e15bee889f61feab97127c7fc3a925/1.21.2-pre5.json"
          },
          {
            "id": "1.21.2-pre4",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/f8c30497e42d4d5548ea43fc80e80080e46feadb/1.21.2-pre4.json"
          },
          {
            "id": "1.21.2-pre3",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/5725f00c9d443b1b9916834f3e2890880afbc8b7/1.21.2-pre3.json"
          },
          {
            "id": "1.21.2-pre2",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/f2be3dc90cebefef97b477df056d0b1543ab6548/1.21.2-pre2.json"
          },
          {
            "id": "1.21.2-pre1",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/e2c14dc645a569cf75105587f3b1fe893f9a870e/1.21.2-pre1.json"
          },
          {
            "id": "24w40a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/f2cf220ed13ed95420786cc9b09f75d4c04cce61/24w40a.json"
          },
          {
            "id": "24w39a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/fc395e429f188090f8bb3c0db84de7aea6c56875/24w39a.json"
          },
          {
            "id": "24w38a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/f1fb2a6749c5ddb6312ee2a97761693ff144a452/24w38a.json"
          },
          {
            "id": "24w37a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/1bec692e612b610583a7a4a68f488f4c5e9c4514/24w37a.json"
          },
          {
            "id": "24w36a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/33ec80034de0eaf89bcccd6c3507be9431ea5888/24w36a.json"
          },
          {
            "id": "24w35a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/94cfb3379201811519e78960babbd101ce60c4a0/24w35a.json"
          },
          {
            "id": "24w34a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/3cca175a12c0ef5eceb7a0c5291ecaa7619c07cc/24w34a.json"
          },
          {
            "id": "24w33a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/c81194576351531b52eeb2780538d2622e7e7152/24w33a.json"
          },
          {
            "id": "1.21.1",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/f31393a7358b95693640aaa27b81d1d9f2cd808c/1.21.1.json"
          },
          {
            "id": "1.21.1-rc1",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/a0e35072ad8f055e2fd149dab2846427a59343c7/1.21.1-rc1.json"
          },
          {
            "id": "1.21",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/8ea83dfdc10240e649ec29ae4ac22e4855821559/1.21.json"
          },
          {
            "id": "1.21-rc1",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/6ea73d23101be5abe63e00e71ce9dc8293725919/1.21-rc1.json"
          },
          {
            "id": "1.21-pre4",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/b2a6b9c6519c234ba5f75a23ba696481e424ee8d/1.21-pre4.json"
          },
          {
            "id": "1.21-pre3",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/83d8dbf298d1b1cc6f117ccc07bf0ad1de083caa/1.21-pre3.json"
          },
          {
            "id": "1.21-pre2",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/baf12eedb4fc32a88e6785d91b9159d199ca1650/1.21-pre2.json"
          },
          {
            "id": "1.21-pre1",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/b58c4a1121baeded6a839868fc42c0a35f9a4a2c/1.21-pre1.json"
          },
          {
            "id": "24w21b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/5df31a1ed5cdeb7b21c603a2e797d5f44c599c09/24w21b.json"
          },
          {
            "id": "24w21a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/d93b10373d7f6f1de10ab6e52f25bc942fcf8490/24w21a.json"
          },
          {
            "id": "24w20a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/e337db477919f4278fe25daafcb613e9ef57f9e8/24w20a.json"
          },
          {
            "id": "24w19b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/d96562f56db80b3f5bdf65321897f2328328aaad/24w19b.json"
          },
          {
            "id": "24w19a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/6cddca7489e60a722af0f8af7c4e3d3bdbb68c27/24w19a.json"
          },
          {
            "id": "24w18a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/2efeabc549e8a10ebcb086ad6da322f3700ec55b/24w18a.json"
          },
          {
            "id": "1.20.6",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/ae221f169e1fbe888135cd7e39d58fda6695f7e7/1.20.6.json"
          },
          {
            "id": "1.20.6-rc1",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/cabeacc60a481fcb1966cfac02bf61bc46ccbfbb/1.20.6-rc1.json"
          },
          {
            "id": "1.20.5",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/63782c6cb58b0d3dd03af9ce6402808341a813ed/1.20.5.json"
          },
          {
            "id": "1.20.5-rc3",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/469199204c4da57e3dd12f392209d40e79797f3e/1.20.5-rc3.json"
          },
          {
            "id": "1.20.5-rc2",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/3318c9d45d81a07f63745f9128443ffbe7fc1a75/1.20.5-rc2.json"
          },
          {
            "id": "1.20.5-rc1",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/0cf299a1b43c4a310d824ba01c22031696e88b89/1.20.5-rc1.json"
          },
          {
            "id": "1.20.5-pre4",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/3c07451309cbce5c8e8c109d5e3cea6bbcb2fbc1/1.20.5-pre4.json"
          },
          {
            "id": "1.20.5-pre3",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/9deadd7cf2c4b1b2bd1ee1edf75ceb97b4aa0982/1.20.5-pre3.json"
          },
          {
            "id": "1.20.5-pre2",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/db6df26468b7432f0853066642bf9de53ed33083/1.20.5-pre2.json"
          },
          {
            "id": "1.20.5-pre1",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/9c36c26f3e54c01a0d135fb2d495619f2800eeee/1.20.5-pre1.json"
          },
          {
            "id": "24w14a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/eaef0d5ecb021141ef1d2b6afd136f8d43aad5db/24w14a.json"
          },
          {
            "id": "24w14potato",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/5b073f81ab565f14f57dcfcdc750574c8a61e032/24w14potato.json"
          },
          {
            "id": "24w13a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/95c1f5e52404329a99c4cce1809ac767968a8790/24w13a.json"
          },
          {
            "id": "24w12a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/4d5535a420f3b94fd85a36ba230c6ae1a25e5c92/24w12a.json"
          },
          {
            "id": "24w11a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/e0ea49d260a405696a63f915ac4dff8837b8b38f/24w11a.json"
          },
          {
            "id": "24w10a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/e5366060e53288edbedf7f7ada3e372547359bc0/24w10a.json"
          },
          {
            "id": "24w09a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/38c8f81f24506e504084b6b4a778b508c24a1150/24w09a.json"
          },
          {
            "id": "24w07a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/388f573dc92092171f1bee53353017c6d08d1006/24w07a.json"
          },
          {
            "id": "24w06a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/4e90f92ad28dc219a42aeed394b7433943cb4967/24w06a.json"
          },
          {
            "id": "24w05b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/d9706eb5ffa26bdac971bd8400e2ac1a80c48f3a/24w05b.json"
          },
          {
            "id": "24w05a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/cfcd9e4379ed8338abdbf0962e8859f8dc65ec18/24w05a.json"
          },
          {
            "id": "24w04a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/fc9eb47516fec36392072a41dbf93d3af5c3413c/24w04a.json"
          },
          {
            "id": "24w03b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/be6a779e121e8f496bd41949b4c728c7a8a96ef0/24w03b.json"
          },
          {
            "id": "24w03a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/7c9290a81d0a9e41d7969136c74455e055acda30/24w03a.json"
          },
          {
            "id": "23w51b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/70a55478bfc650bd8413e8b58e0e81d092549d13/23w51b.json"
          },
          {
            "id": "23w51a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/ff9b64275d32920a08fd811117e8ee5f5cb462b4/23w51a.json"
          },
          {
            "id": "1.20.4",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/dce1bd66053e2de9d5cb64136d5a7a2401cc05d7/1.20.4.json"
          },
          {
            "id": "1.20.4-rc1",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/097fefb4c8fad9dfc6cf6d627f175482a529168d/1.20.4-rc1.json"
          },
          {
            "id": "1.20.3",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/4ec7137e766ede39bae65a85ea6759f091571061/1.20.3.json"
          },
          {
            "id": "1.20.3-rc1",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/e63af5bb91c7a1cd962baa802e713791e21538ae/1.20.3-rc1.json"
          },
          {
            "id": "1.20.3-pre4",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/cc8800b6bf75309bdf8f369a44182c0ab6fb625c/1.20.3-pre4.json"
          },
          {
            "id": "1.20.3-pre3",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/b5aa4c714f0b9a90465b3bb0ba1b9eb769f66963/1.20.3-pre3.json"
          },
          {
            "id": "1.20.3-pre2",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/3f5f4f9e17601cfbd9c664a37944c72d31d147de/1.20.3-pre2.json"
          },
          {
            "id": "1.20.3-pre1",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/ec9007d6a60129cb0a2cfb6531d14cd05b5494f3/1.20.3-pre1.json"
          },
          {
            "id": "23w46a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/1d142e773a5597ac2cff359fd8e699e7c927886d/23w46a.json"
          },
          {
            "id": "23w45a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/14778d4b5ad6b3a87caab70d57393ec285305a33/23w45a.json"
          },
          {
            "id": "23w44a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/498e9debf6c6b4e0721f5a669165268bb326576c/23w44a.json"
          },
          {
            "id": "23w43b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/0784e37655056da4bab394bd8c855d8018dd997e/23w43b.json"
          },
          {
            "id": "23w43a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/2c1b0647b19647a2225bf3d1b89facdbe19e8045/23w43a.json"
          },
          {
            "id": "23w42a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/95a690929f788ed8e3abee4e9b4e55a28d58a00e/23w42a.json"
          },
          {
            "id": "23w41a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/fc25ad1a30862f145ba6ef72a42aac7c1a61cc2b/23w41a.json"
          },
          {
            "id": "23w40a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/c3bf0882dee51ca3691e64b43b35b3f2f05c35f7/23w40a.json"
          },
          {
            "id": "1.20.2",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/a7e882c8cad8cfcb4bc6a6def82ef0a9f96cb682/1.20.2.json"
          },
          {
            "id": "1.20.2-rc2",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/820c252a679f7da97ca0a896e30bfc3b4258303b/1.20.2-rc2.json"
          },
          {
            "id": "1.20.2-rc1",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/90b195de22e35fc57bfff7b9a91d82105dc16aa4/1.20.2-rc1.json"
          },
          {
            "id": "1.20.2-pre4",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/e5dbaf91d79dded7f41f60598cd2d9e5af7043b3/1.20.2-pre4.json"
          },
          {
            "id": "1.20.2-pre3",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/c5bdc4961ad5d629904c26cea2d86bad2996c6cc/1.20.2-pre3.json"
          },
          {
            "id": "1.20.2-pre2",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/c7262b09f61afbd1729dae89704319a4a2fce32b/1.20.2-pre2.json"
          },
          {
            "id": "1.20.2-pre1",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/351ae96d91d785db93372760343406ff9cf9d1e7/1.20.2-pre1.json"
          },
          {
            "id": "23w35a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/a43927e89237fa764c4e497b9f83d97d0308ea08/23w35a.json"
          },
          {
            "id": "23w33a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/b3ffe64ff03395014745231d16262c1dd43c31dc/23w33a.json"
          },
          {
            "id": "23w32a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/6ff19ffe40603917ed76e1e3ed13d85c5965446a/23w32a.json"
          },
          {
            "id": "23w31a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/0940c457a5d9b94215491cb8809848d3a4eb8b78/23w31a.json"
          },
          {
            "id": "1.20.1",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/d6f92584440ee567b5844ad3208ed7559af5be70/1.20.1.json"
          },
          {
            "id": "1.20.1-rc1",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/aad33b09acc45bbae2f44c90d691ea38a761ead4/1.20.1-rc1.json"
          },
          {
            "id": "1.20",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/366f72d4ac37c121031ee616d3f464303d7f1a2f/1.20.json"
          },
          {
            "id": "1.20-rc1",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/1c2a35d142b6e871fb9a27d510beacb16a8fe3c8/1.20-rc1.json"
          },
          {
            "id": "1.20-pre7",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/60ebc6a7f66e62b900b8bd9a6f2733ad3c50655e/1.20-pre7.json"
          },
          {
            "id": "1.20-pre6",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/27dc0ad23f6fb97f05ad03d282a13b9fb1a42db4/1.20-pre6.json"
          },
          {
            "id": "1.20-pre5",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/69825ab41b802eea6f5f1d1be9a3a7584c2844de/1.20-pre5.json"
          },
          {
            "id": "1.20-pre4",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/ebc8daf95b5831e85bf54bd5bd8729e42aba38a5/1.20-pre4.json"
          },
          {
            "id": "1.20-pre3",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/aa766d0d75a4789cb4b7bc9810a99bf11b58f587/1.20-pre3.json"
          },
          {
            "id": "1.20-pre2",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/bc4b2e8616491102cde3b51ac0861bb6eadd9d08/1.20-pre2.json"
          },
          {
            "id": "1.20-pre1",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/2f66f0e26e1662279f1a05b17e8cad1b1690eab7/1.20-pre1.json"
          },
          {
            "id": "23w18a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/90b5d6a8caa4c88bd846178c6452ee9d99e9e645/23w18a.json"
          },
          {
            "id": "23w17a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/e2ba2985083a387a8591648f5335209400cbd2a6/23w17a.json"
          },
          {
            "id": "23w16a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/8ab47cd759a8c940ef44bb95d703d05f061b7510/23w16a.json"
          },
          {
            "id": "23w14a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/a71c1e5bd9d968019b7810929bbc2c642e8f7eca/23w14a.json"
          },
          {
            "id": "23w13a_or_b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/57eb9e49d1550da7015626bac93e0844d8b4c185/23w13a_or_b.json"
          },
          {
            "id": "23w13a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/3acc59c7194f45d5ff6a55d510453bf3fcfbb628/23w13a.json"
          },
          {
            "id": "23w12a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/a711d4912fafeeac9a9ef3225a0e8533780644bc/23w12a.json"
          },
          {
            "id": "1.19.4",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/1f0949aa6aaa67006d3d5e08499c4d77c6c85291/1.19.4.json"
          },
          {
            "id": "1.19.4-rc3",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/2f8ac25cd3db0cefd0d74fccfbe220c5337bc0dd/1.19.4-rc3.json"
          },
          {
            "id": "1.19.4-rc2",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/a12d6b66ee72964fc3fc6b9966a15bc0be3ee61e/1.19.4-rc2.json"
          },
          {
            "id": "1.19.4-rc1",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/788f0b4a985e23d650e3c54acce3f85efdfdbe30/1.19.4-rc1.json"
          },
          {
            "id": "1.19.4-pre4",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/56716890371f2b0f5bc6994124d6fa68514e821c/1.19.4-pre4.json"
          },
          {
            "id": "1.19.4-pre3",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/21da4f3f4ea1b789a80ce6168172eff0fbd3557c/1.19.4-pre3.json"
          },
          {
            "id": "1.19.4-pre2",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/3e316ef5817e940fec6a8167e5a9558bcf0f1604/1.19.4-pre2.json"
          },
          {
            "id": "1.19.4-pre1",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/8c5e56e43a74d75b28c088022215dba7a7f058a3/1.19.4-pre1.json"
          },
          {
            "id": "23w07a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/f45fba40f514b16d5f5ff7134cc2d3c71088f3fa/23w07a.json"
          },
          {
            "id": "23w06a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/79315c80a15c10d55a21870bf3fd5fd4e86f2a3f/23w06a.json"
          },
          {
            "id": "23w05a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/94e3ea33c64cc7531050be0cdbdce679bb2db947/23w05a.json"
          },
          {
            "id": "23w04a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/2e70a094cfc9ef9ea6b3d8c5956d21a4b79ba17e/23w04a.json"
          },
          {
            "id": "23w03a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/435dd011ddbd160888e61988902434b575c5c4bc/23w03a.json"
          },
          {
            "id": "1.19.3",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/b4ee74c4b592520e29a1a6a554943863b87d78b5/1.19.3.json"
          },
          {
            "id": "1.19.3-rc3",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/227fd112ad0c3513f2eb0124ba1aedee11faed36/1.19.3-rc3.json"
          },
          {
            "id": "1.19.3-rc2",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/87d7df7c7406fe5240bfd705c8af15799b2d9370/1.19.3-rc2.json"
          },
          {
            "id": "1.19.3-rc1",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/93aed0c1ef067ac7a4b1a71d9e1a68fccef2a3b9/1.19.3-rc1.json"
          },
          {
            "id": "1.19.3-pre3",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/d9f5e3f0d97f053fea956dbab6832e01229772f8/1.19.3-pre3.json"
          },
          {
            "id": "1.19.3-pre2",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/8af108984589221a2a57e19ca2dbd110baad70b6/1.19.3-pre2.json"
          },
          {
            "id": "1.19.3-pre1",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/f5a66ebc4e537835fb2daadd5ba46b2177256579/1.19.3-pre1.json"
          },
          {
            "id": "22w46a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/4a614478585ebb682b77317d2a83b302828ea0ce/22w46a.json"
          },
          {
            "id": "22w45a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/26755a6e1ecb25d5d36c4c1ca6af7016da2acaa3/22w45a.json"
          },
          {
            "id": "22w44a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/9f51beaf9ec2851b1a76eaec957ef35011b4c203/22w44a.json"
          },
          {
            "id": "22w43a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/2db9819c60e446cf89e0b71c9792e8943c9aae13/22w43a.json"
          },
          {
            "id": "22w42a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/34109aa5cfdfb88543ed3117aa9e83da9ad75388/22w42a.json"
          },
          {
            "id": "1.19.2",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/ed548106acf3ac7e8205a6ee8fd2710facfa164f/1.19.2.json"
          },
          {
            "id": "1.19.2-rc2",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/ebecfcfa284240daa29737c84eb98a2d2e1a33c2/1.19.2-rc2.json"
          },
          {
            "id": "1.19.2-rc1",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/f8549c05d26a79c0fb5701ba66d200465daa5f18/1.19.2-rc1.json"
          },
          {
            "id": "1.19.1",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/39d5e8925d37490c6f2abb2e02b8c6f1b35719df/1.19.1.json"
          },
          {
            "id": "1.19.1-rc3",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/8762a93dc173c7a8e68d70ac5517b37e2c5f969f/1.19.1-rc3.json"
          },
          {
            "id": "1.19.1-rc2",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/be8528e20ead28832f20e4278f45519d1e28022a/1.19.1-rc2.json"
          },
          {
            "id": "1.19.1-pre6",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/a0d36b2776f02dc9d864f0f931b6c052435f7918/1.19.1-pre6.json"
          },
          {
            "id": "1.19.1-pre5",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/1e832137d90ae9915e1b1a22537f30feb0178ce0/1.19.1-pre5.json"
          },
          {
            "id": "1.19.1-pre4",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/b2cebb78f1c95d5d886e2c30e8cf913f574ecd3f/1.19.1-pre4.json"
          },
          {
            "id": "1.19.1-pre3",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/05935ad004751df834add5d8111bea341f388849/1.19.1-pre3.json"
          },
          {
            "id": "1.19.1-pre2",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/4c2e4db17880bd4dad87cb2cd87d4b5f5d159a6e/1.19.1-pre2.json"
          },
          {
            "id": "1.19.1-rc1",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/dc09b172bbef8c24a69c4c6711e96051464204ad/1.19.1-rc1.json"
          },
          {
            "id": "1.19.1-pre1",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/b684045dca48e65dbf5ec5f09070d9382731d0ab/1.19.1-pre1.json"
          },
          {
            "id": "22w24a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/1a490c090ec1affab43deba00929558c73dd1e23/22w24a.json"
          },
          {
            "id": "1.19",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/14bbfb25fb1c1c798e3c9b9482b081a78d1f3a9d/1.19.json"
          },
          {
            "id": "1.19-rc2",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/ae2b88a016be92e5838afa6232005b41e2935622/1.19-rc2.json"
          },
          {
            "id": "1.19-rc1",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/f216ace4c19321071a80e7c6dd51efe402032e94/1.19-rc1.json"
          },
          {
            "id": "1.19-pre5",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/800c849fe1e8694e8023920e01174e3d2f73065b/1.19-pre5.json"
          },
          {
            "id": "1.19-pre4",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/11edfa21e200734858abdd466aeead7754cc68e2/1.19-pre4.json"
          },
          {
            "id": "1.19-pre3",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/bf1ebc7ae0dbef7b92307a11eb0cbbfeaa3359e2/1.19-pre3.json"
          },
          {
            "id": "1.19-pre2",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/5dbf076b98594a81069a3d574d985f8e3a701990/1.19-pre2.json"
          },
          {
            "id": "1.19-pre1",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/277c1456e8de294125887c0937ad39f9d286f7e6/1.19-pre1.json"
          },
          {
            "id": "22w19a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/b823251598bcefadad774283db6979e40044e229/22w19a.json"
          },
          {
            "id": "22w18a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/1de25e62031021df204de79c264822898c937447/22w18a.json"
          },
          {
            "id": "22w17a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/4df4e4831fafbaa4d41895f448a0596d779425f3/22w17a.json"
          },
          {
            "id": "22w16b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/f6f22cde08f4603aa90aec80a9c5b60b93a09b15/22w16b.json"
          },
          {
            "id": "22w16a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/a39b0f1591257664a1296b8e95a0689c1cbdad73/22w16a.json"
          },
          {
            "id": "22w15a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/2ed4589fdbc1d58a6d60e2b6809ac956d0a7cf34/22w15a.json"
          },
          {
            "id": "22w14a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/36abf1492f25e5bb7187307fefc91470cd40817d/22w14a.json"
          },
          {
            "id": "22w13oneblockatatime",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/d70cef49b7606e8c37e49abad4ff542e2ce21d09/22w13oneblockatatime.json"
          },
          {
            "id": "22w13a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/bd1e0454545c498d20d25e4d1bc8fd4ddeeb06fe/22w13a.json"
          },
          {
            "id": "22w12a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/24998bd342996995e1a2007111056906f465a867/22w12a.json"
          },
          {
            "id": "22w11a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/4f1500bb4141a58c8692224e1157c986c6a00075/22w11a.json"
          },
          {
            "id": "1.18.2",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/334b33fcba3c9be4b7514624c965256535bd7eba/1.18.2.json"
          },
          {
            "id": "1.18.2-rc1",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/a88f2199e697f43c06d7051186762cd514f5f629/1.18.2-rc1.json"
          },
          {
            "id": "1.18.2-pre3",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/c93d7580baf1b292763fa14a379516ffe5822967/1.18.2-pre3.json"
          },
          {
            "id": "1.18.2-pre2",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/46e96658399bf2e1487d88181bd75689978491f8/1.18.2-pre2.json"
          },
          {
            "id": "1.18.2-pre1",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/59bd690c22c69ace39595d3b14bf85a01bb54f35/1.18.2-pre1.json"
          },
          {
            "id": "22w07a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/83d4e38c96c37a840fed51747e98d45d82115405/22w07a.json"
          },
          {
            "id": "22w06a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/f46697f288f553f7a21a42291b85d708924128e8/22w06a.json"
          },
          {
            "id": "22w05a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/bebb4be7c06e5b311e08a46212328c0d1dee1e60/22w05a.json"
          },
          {
            "id": "22w03a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/b19476adc780897c3ea2805bc90ff91f694093bd/22w03a.json"
          },
          {
            "id": "1.18.1",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/7ff864e988a2c29907154d5f9701e87e5d5e554a/1.18.1.json"
          },
          {
            "id": "1.18.1-rc3",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/027ff0f43a3589b3ea16771ec11d052fc0fdf45e/1.18.1-rc3.json"
          },
          {
            "id": "1.18.1-rc2",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/0e114a6a9e1f246dea4c8835e8046b3d8ce575e3/1.18.1-rc2.json"
          },
          {
            "id": "1.18.1-rc1",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/2f24188f9c0759be5c844acae8b47fb582c75e7e/1.18.1-rc1.json"
          },
          {
            "id": "1.18.1-pre1",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/01cb59a31c5af10b73ce11d04df73b469e5e8664/1.18.1-pre1.json"
          },
          {
            "id": "1.18",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/7367ea8b7cad7c7830192441bb2846be0d2ceeac/1.18.json"
          },
          {
            "id": "1.18-rc4",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/489269e1139f4c9ce6af64e9e80ac094accd3515/1.18-rc4.json"
          },
          {
            "id": "1.18-rc3",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/0cea86833bdfb8de6d85f2b87b4dda2081f3fc3c/1.18-rc3.json"
          },
          {
            "id": "1.18-rc2",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/1cd29ca38d308f1375529c2c52c7819a21bb6410/1.18-rc2.json"
          },
          {
            "id": "1.18-rc1",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/92779f7a433c8b65d2fe52dca236a0b99a877964/1.18-rc1.json"
          },
          {
            "id": "1.18-pre8",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/befe1636010c86b29a0b3b74d9614eaca4679185/1.18-pre8.json"
          },
          {
            "id": "1.18-pre7",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/14c6eee2ef0b2ec4dd66d21a45288df9ea445853/1.18-pre7.json"
          },
          {
            "id": "1.18-pre6",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/881f1e388c66a0a27f1e39759d594aba7fc827cc/1.18-pre6.json"
          },
          {
            "id": "1.18-pre5",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/1c7297b2645db73c3548d9c7bcec9d1f1daf9a3d/1.18-pre5.json"
          },
          {
            "id": "1.18-pre4",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/2604a38227d2943e072fb6d1e1885cf71659a620/1.18-pre4.json"
          },
          {
            "id": "1.18-pre3",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/6bd8b415c9df47ba64474f10ce777e34d31462de/1.18-pre3.json"
          },
          {
            "id": "1.18-pre2",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/f7bc077f4bae337c5d783a77246cdfc019f5a85e/1.18-pre2.json"
          },
          {
            "id": "1.18-pre1",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/bad40b99d4019c10ef43641ff11dfecd5fd0a2e0/1.18-pre1.json"
          },
          {
            "id": "21w44a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/a0a663bcbd3c43ced8e0e4889e82b79e48d2c42c/21w44a.json"
          },
          {
            "id": "21w43a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/87fce70da2c59051a18e3d792f35839f7a799f82/21w43a.json"
          },
          {
            "id": "21w42a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/3ce8fdf60e69bfb0944e479ada4cf6b60dcc3995/21w42a.json"
          },
          {
            "id": "21w41a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/f05122bd9496b5277cfb24312c1a7a70510cc84a/21w41a.json"
          },
          {
            "id": "21w40a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/a6a012bab1380ce87f9fc4a20212fd7031ac93a4/21w40a.json"
          },
          {
            "id": "21w39a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/008cea9c2128244b9f1ffa3b9512db1e60558390/21w39a.json"
          },
          {
            "id": "21w38a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/893da3cf2aaf60457e4805994f8d526305685e77/21w38a.json"
          },
          {
            "id": "21w37a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/fd90ab042d60935a123a579ec03efc422f06e4bb/21w37a.json"
          },
          {
            "id": "1.17.1",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/e0e7ab5ed6f55bbd874ef95be3c9356d67e64b57/1.17.1.json"
          },
          {
            "id": "1.17.1-rc2",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/4224a23efdcd362508457bda732b502d3d8bfbaf/1.17.1-rc2.json"
          },
          {
            "id": "1.17.1-rc1",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/27d7a88469c5a59420d7b060f2a253802164185f/1.17.1-rc1.json"
          },
          {
            "id": "1.17.1-pre3",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/30637bf484bc2e530db468c42e6d2695bb806420/1.17.1-pre3.json"
          },
          {
            "id": "1.17.1-pre2",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/95f076c3f748ab83f44bc4c80b0039626b67806e/1.17.1-pre2.json"
          },
          {
            "id": "1.17.1-pre1",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/609fa7a9bb0d1c3855111e1d511d4ba2a398a524/1.17.1-pre1.json"
          },
          {
            "id": "1.17",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/0d9ace8a2ecfd1f4c782786f4b985a499240ff12/1.17.json"
          },
          {
            "id": "1.17-rc2",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/45b8f00ecc9ca265c80da0d8ad9a6710f088bc21/1.17-rc2.json"
          },
          {
            "id": "1.17-rc1",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/ed41604ce5637dfc62e062e1ce809817d54aa46d/1.17-rc1.json"
          },
          {
            "id": "1.17-pre5",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/29bd60294ee8387f7ca7d9c1abd835484f71bbfc/1.17-pre5.json"
          },
          {
            "id": "1.17-pre4",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/9c91afc7b8e9bab61facd2423bd75b375df0fc2e/1.17-pre4.json"
          },
          {
            "id": "1.17-pre3",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/de4dd57535bea923731008c1f29562211740aba6/1.17-pre3.json"
          },
          {
            "id": "1.17-pre2",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/76f54994dc32298f0743e2a9031ad1bba04cf753/1.17-pre2.json"
          },
          {
            "id": "1.17-pre1",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/ba419fd73cb07512bd2ca090f179e84333f9804c/1.17-pre1.json"
          },
          {
            "id": "21w20a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/6757e49a93f18fe7b8d522f83b62d47629da37ab/21w20a.json"
          },
          {
            "id": "21w19a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/4a43adfb683de80b158a5c6899f34f3a041dc578/21w19a.json"
          },
          {
            "id": "21w18a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/b3266f58ade03b19896163c7cfb40cf815aa8e28/21w18a.json"
          },
          {
            "id": "21w17a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/2af27c4d5412f4476b43882052b5cb510cbc0984/21w17a.json"
          },
          {
            "id": "21w16a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/f083b566dd515b5706ead9522c42b187b3f2f2f6/21w16a.json"
          },
          {
            "id": "21w15a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/ce5b993772ae22cc5f518e72b93744954945f755/21w15a.json"
          },
          {
            "id": "21w14a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/7a67f727cc7847efc3753de26a32d051348b5fba/21w14a.json"
          },
          {
            "id": "21w13a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/c20df75b956c2eb982a9028ceff965e1aae40345/21w13a.json"
          },
          {
            "id": "21w11a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/c0d562d6db031a67b9569c0765c8ef68434e0ee2/21w11a.json"
          },
          {
            "id": "21w10a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/d4982f2015d40e966beeae097307e33e2f26fa57/21w10a.json"
          },
          {
            "id": "21w08b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/d7dbd5a6f2eaa20726235a2b40f955004339b7af/21w08b.json"
          },
          {
            "id": "21w08a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/bc80c3181bbeebd6e0cab46fc445b76b6c9dadb1/21w08a.json"
          },
          {
            "id": "21w07a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/96476dbdb5d6689b3f1a47c025f1b7ad3630bd95/21w07a.json"
          },
          {
            "id": "21w06a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/446e380daf0fa4a9d42d5fcfa8984f8a9500e063/21w06a.json"
          },
          {
            "id": "21w05b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/7e957c6d798c266d5978835fcf8f74f7af96153e/21w05b.json"
          },
          {
            "id": "21w05a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/f28b435faf0610838bb6ddf6ace922ea27b89de9/21w05a.json"
          },
          {
            "id": "21w03a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/4b7bb5c32164c0497717ab7ec5dc3016de6dfdc0/21w03a.json"
          },
          {
            "id": "1.16.5",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/fba9f7833e858a1257d810d21a3a9e3c967f9077/1.16.5.json"
          },
          {
            "id": "1.16.5-rc1",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/79b63085fb7b4805877ee719f6518ab3c87b3833/1.16.5-rc1.json"
          },
          {
            "id": "20w51a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/08f2e16bc1ab7f7bdeaa95f2762ff05c7407100d/20w51a.json"
          },
          {
            "id": "20w49a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/ba1eaa1e4396bd42eb1ef2a0897fcf0043551f6f/20w49a.json"
          },
          {
            "id": "20w48a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/cbbe53da94d1368c5e2fd8309f0e7b1645957516/20w48a.json"
          },
          {
            "id": "20w46a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/d1d7a38b0d650c51473ba04019176b575fd6f34b/20w46a.json"
          },
          {
            "id": "20w45a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/913ae8af6dcc8b308fb58da1ee3b58e3a83f5f28/20w45a.json"
          },
          {
            "id": "1.16.4",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/596ad61fda7612d9edf8881cf81869276bdb7f82/1.16.4.json"
          },
          {
            "id": "1.16.4-rc1",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/ef95b0f319cb282802a4cc38e57e79d4fafc9567/1.16.4-rc1.json"
          },
          {
            "id": "1.16.4-pre2",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/5af340937921b990c1b7da8bdac9d04fad7c3c95/1.16.4-pre2.json"
          },
          {
            "id": "1.16.4-pre1",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/b48239bf7935185c788e07d9c2d83d788ce3f27b/1.16.4-pre1.json"
          },
          {
            "id": "1.16.3",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/6485dd131ef68c968041a9f6fd73094b027e42e1/1.16.3.json"
          },
          {
            "id": "1.16.3-rc1",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/5ba5cfa865db9020ddab97df365ea8821d3eb454/1.16.3-rc1.json"
          },
          {
            "id": "1.16.2",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/998d9ef5770d05c20d760dc16cf85151f35009f2/1.16.2.json"
          },
          {
            "id": "1.16.2-rc2",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/278e49a115bce14e99b5fa9420103652692c9f6b/1.16.2-rc2.json"
          },
          {
            "id": "1.16.2-rc1",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/541ad2a92d12e6d36fb6c2b29b5d69ae4b97ab23/1.16.2-rc1.json"
          },
          {
            "id": "1.16.2-pre3",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/3df6469e9cc759a1ac0a8f6690289922d547f97b/1.16.2-pre3.json"
          },
          {
            "id": "1.16.2-pre2",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/7768698c025d559928042452df9d79910e7818eb/1.16.2-pre2.json"
          },
          {
            "id": "1.16.2-pre1",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/9709f88b92c9078c3d0a95dae3a225dc8cd70a34/1.16.2-pre1.json"
          },
          {
            "id": "20w30a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/3de2ee50c31ebcd4b1fa9577e2550a6020710df5/20w30a.json"
          },
          {
            "id": "20w29a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/d869c8cda528228a47b80dde5cc9ea138f514a99/20w29a.json"
          },
          {
            "id": "20w28a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/33142315373d1ed7289fa6e5b8b2de6980147de8/20w28a.json"
          },
          {
            "id": "20w27a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/e442b0f37792b83bf46e9ae0258f45faff33a7cf/20w27a.json"
          },
          {
            "id": "1.16.1",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/54fa3af57d041d2771e66d390197b2c0288e697c/1.16.1.json"
          },
          {
            "id": "1.16",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/e9d21d375f9c961f0e9731d4e463306d76e77c48/1.16.json"
          },
          {
            "id": "1.16-rc1",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/49d94686688119e1d85d8c7ebc690b0f6d71ebd8/1.16-rc1.json"
          },
          {
            "id": "1.16-pre8",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/d85ab25ae33462045ba050774cf9cbb978afebca/1.16-pre8.json"
          },
          {
            "id": "1.16-pre7",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/ec4dc4530869505923e1ebf6fc80ea08eda831e1/1.16-pre7.json"
          },
          {
            "id": "1.16-pre6",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/4c1ed3dcbbf22fe0a17eb05b3f1f1445f25508d6/1.16-pre6.json"
          },
          {
            "id": "1.16-pre5",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/e41cdd44896fcfd96db07aecf89a58bbc89d6c6f/1.16-pre5.json"
          },
          {
            "id": "1.16-pre4",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/68b121aae24c9f217378ac64e7e27e1a4ca6c6e0/1.16-pre4.json"
          },
          {
            "id": "1.16-pre3",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/72e9981dd7fb9bc1e775a04aa844ef79192bfebc/1.16-pre3.json"
          },
          {
            "id": "1.16-pre2",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/81ae4d3c6cabf02af6c67abd87c6b9c9501bdf26/1.16-pre2.json"
          },
          {
            "id": "1.16-pre1",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/bcfd0eeee263ea7779c23ba7d55034607ba4b00e/1.16-pre1.json"
          },
          {
            "id": "20w22a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/a0bbbe0674789a5b2b11705bb868a446bfd660fd/20w22a.json"
          },
          {
            "id": "20w21a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/3d95fdd82e0fa506eb4099f3e948c378124a2baf/20w21a.json"
          },
          {
            "id": "20w20b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/2ac29186d5062224ff326d868fe78bea79360ad1/20w20b.json"
          },
          {
            "id": "20w20a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/4e5118f80f061490e54d843216780dabdaaf59fd/20w20a.json"
          },
          {
            "id": "20w19a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/be653aac3f8e6cfc2bc40cc9be764f0a4ba46121/20w19a.json"
          },
          {
            "id": "20w18a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/1c7978f8d1b6735bb0b6d813f3aed0363bf1bd8d/20w18a.json"
          },
          {
            "id": "20w17a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/98807b36f1ee047d5e4e2744d94b28d9e5c1b7cd/20w17a.json"
          },
          {
            "id": "20w16a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/9ca086c9195b437c08f9f0c38d25dc1955d91870/20w16a.json"
          },
          {
            "id": "20w15a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/bbf16435ce4c151d3908b442987c162e6f7cf8c5/20w15a.json"
          },
          {
            "id": "20w14a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/1e548dbfeb7cb9aa76888b7308112c1a03cf0cc0/20w14a.json"
          },
          {
            "id": "20w14infinite",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/73eb2a736f0a7349fb5f73e685f847826e5321fd/20w14infinite.json"
          },
          {
            "id": "20w13b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/430033af05f29add54241c55be62bbde6b640cd5/20w13b.json"
          },
          {
            "id": "20w13a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/2e7daff8b5d319aca184bfa818f073663ada22d7/20w13a.json"
          },
          {
            "id": "20w12a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/79a74e0bfd167b1d09713accb7c2fe6cd1c5dd8c/20w12a.json"
          },
          {
            "id": "20w11a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/ac08e450ea036741d61bcb7e5ea09e5db2e945d7/20w11a.json"
          },
          {
            "id": "20w10a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/781dbf396510e90e3ec6c845d60e05719a3c8853/20w10a.json"
          },
          {
            "id": "20w09a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/191f7a06170d42a2aed63c2a8adf4aaae4799892/20w09a.json"
          },
          {
            "id": "20w08a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/77545f4f812d127fd032e36413901b85215662d9/20w08a.json"
          },
          {
            "id": "20w07a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/49b9a7a4d3ae78d74dcba384e2aea08cb58fbe37/20w07a.json"
          },
          {
            "id": "20w06a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/59a5d77dce749c868f7338c5d6241312a9dc2f1a/20w06a.json"
          },
          {
            "id": "1.15.2",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/e9d0adb8f642abe422909ede50f651b2b58a3573/1.15.2.json"
          },
          {
            "id": "1.15.2-pre2",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/2b1688e3a06c0427a99cd0042554ed40eb4fafa4/1.15.2-pre2.json"
          },
          {
            "id": "1.15.2-pre1",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/d7f37c8d4695dff2a9f553952e9c97a49ee471ca/1.15.2-pre1.json"
          },
          {
            "id": "1.15.1",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/18c3063de87ae126b4e017121219ba802be0755b/1.15.1.json"
          },
          {
            "id": "1.15.1-pre1",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/1b5aee0865f805a44ecdbed04c964352e86534f2/1.15.1-pre1.json"
          },
          {
            "id": "1.15",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/833322370ab320e77717097082effe1d124d48bd/1.15.json"
          },
          {
            "id": "1.15-pre7",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/e60f500bb19e44c0e632e02da12807ff2fe92e49/1.15-pre7.json"
          },
          {
            "id": "1.15-pre6",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/6da29669f5a9cd8ddf8ee92888125a23eb09b877/1.15-pre6.json"
          },
          {
            "id": "1.15-pre5",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/1e842a4e2c50234213a19931ac8a462de3021467/1.15-pre5.json"
          },
          {
            "id": "1.15-pre4",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/b4ca2162a7a098e4e4f7dce619666d0aa6f3e2fc/1.15-pre4.json"
          },
          {
            "id": "1.15-pre3",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/1f31491b1ea5e89427393ab3ca6aefb5e0e9c34a/1.15-pre3.json"
          },
          {
            "id": "1.15-pre2",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/62c8b621f2be16d47fa2f05f8f6380a696cfeda3/1.15-pre2.json"
          },
          {
            "id": "1.15-pre1",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/66e8035a07e8d2610491003ebf7c51a9c4b0ed67/1.15-pre1.json"
          },
          {
            "id": "19w46b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/18f4384dd05ad7711714742e5c22947a3828d6a2/19w46b.json"
          },
          {
            "id": "19w46a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/91bef07ec9143752f2ce038434f60f08e6f10089/19w46a.json"
          },
          {
            "id": "19w45b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/ce9a87180664cce2eaa96518f6dae923943efe4c/19w45b.json"
          },
          {
            "id": "19w45a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/7e459f7878fde73117da2cb89cbaaa6d649b1a39/19w45a.json"
          },
          {
            "id": "19w44a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/652ec7dc926df9b0c7a7f7d00e9cfe34b3b82470/19w44a.json"
          },
          {
            "id": "19w42a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/4c7d6f4ba7786e252c79a73a13106eb077e622a3/19w42a.json"
          },
          {
            "id": "19w41a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/a73a6135db91f13d7399fc9d438c24a7a80fb819/19w41a.json"
          },
          {
            "id": "19w40a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/c2b4b675af813d9e8e43767991539a1770b93e6b/19w40a.json"
          },
          {
            "id": "19w39a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/14180226c4e65289831b3f28fc75aebf8e114deb/19w39a.json"
          },
          {
            "id": "19w38b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/72fea837ad3bf55eaf4a1163109afba0d1f9976c/19w38b.json"
          },
          {
            "id": "19w38a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/e43b0e8f8944107fafb785cb50e2994c4be1676f/19w38a.json"
          },
          {
            "id": "19w37a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/8a986a197d87f45205a5650018708c7f9d9056ad/19w37a.json"
          },
          {
            "id": "19w36a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/90bc200686ed385ca3ccae265393d28a8d3191fe/19w36a.json"
          },
          {
            "id": "19w35a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/39e153ff4f57f533069cf24441f9fa0a23b6d223/19w35a.json"
          },
          {
            "id": "19w34a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/79310fef2c7bb69085e9459568152049f706e52d/19w34a.json"
          },
          {
            "id": "1.14.4",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/be146d5f66a3627ed0a87c234c4d8dde8ab35098/1.14.4.json"
          },
          {
            "id": "1.14.4-pre7",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/9fa32d63671ca8ad48ffc01f478bb5528a9780bb/1.14.4-pre7.json"
          },
          {
            "id": "1.14.4-pre6",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/fc516c11532c5dd97de371786969d0103df1aff9/1.14.4-pre6.json"
          },
          {
            "id": "1.14.4-pre5",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/6561296e73e1cbc2371cda68e0f045191d413ea3/1.14.4-pre5.json"
          },
          {
            "id": "1.14.4-pre4",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/a08857ff791232848fb4f361c05bfc3096cf02b3/1.14.4-pre4.json"
          },
          {
            "id": "1.14.4-pre3",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/1304801a59f94205cf234f809f2ddaf78e2b64a8/1.14.4-pre3.json"
          },
          {
            "id": "1.14.4-pre2",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/33921eca48b26430ff698ce196645d166529f270/1.14.4-pre2.json"
          },
          {
            "id": "1.14.4-pre1",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/22fef20b2c50855f8702a06a836dc4f31412436a/1.14.4-pre1.json"
          },
          {
            "id": "1.14.3",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/e21618620e02be5a14543d1d17ffdba941d09aa8/1.14.3.json"
          },
          {
            "id": "1.14.3-pre4",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/e197ff501e791295140b7b6b02ca5f476075f634/1.14.3-pre4.json"
          },
          {
            "id": "1.14.3-pre3",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/cee4ea21267c4f62171f5cf19bf5b3322424be33/1.14.3-pre3.json"
          },
          {
            "id": "1.14.3-pre2",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/f4a376be79a51403d9cd0c1dbec1a25a2994dc85/1.14.3-pre2.json"
          },
          {
            "id": "1.14.3-pre1",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/6345b47eb7abe7b74870ff11dbd03e282e1b0112/1.14.3-pre1.json"
          },
          {
            "id": "1.14.2",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/83299b3bf3139ebd9ae5547b3144dcf68d4cb1fd/1.14.2.json"
          },
          {
            "id": "1.14.2 Pre-Release 4",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/75bf72d8e4b38cf5f729637efc116697edec4334/1.14.2%20Pre-Release%204.json"
          },
          {
            "id": "1.14.2 Pre-Release 3",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/4a0126da466f90d6e52eb3e27332f7f7070f4be8/1.14.2%20Pre-Release%203.json"
          },
          {
            "id": "1.14.2 Pre-Release 2",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/dee854f57cac0fc9f1b96b96254a67829dd103ae/1.14.2%20Pre-Release%202.json"
          },
          {
            "id": "1.14.2 Pre-Release 1",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/0525ae4750d18d6c3cf9edee1f510333919c6003/1.14.2%20Pre-Release%201.json"
          },
          {
            "id": "1.14.1",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/183e49ba0fabb5ef8a304f8f5907fa887f40c466/1.14.1.json"
          },
          {
            "id": "1.14.1 Pre-Release 2",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/1d0ccfff5f8d13d3ecaddbc481a9a4815e312e4e/1.14.1%20Pre-Release%202.json"
          },
          {
            "id": "1.14.1 Pre-Release 1",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/656e98e9c5a418b4747b0e5892fd301963b0bcc7/1.14.1%20Pre-Release%201.json"
          },
          {
            "id": "1.14",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/0fd01dd81eaa451d3130b1cf025a10f129585b10/1.14.json"
          },
          {
            "id": "1.14 Pre-Release 5",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/157959b1daeda81293854032102eef36e76af108/1.14%20Pre-Release%205.json"
          },
          {
            "id": "1.14 Pre-Release 4",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/93ca7217fa9027019328b1b8f9b2e8f82436622d/1.14%20Pre-Release%204.json"
          },
          {
            "id": "1.14 Pre-Release 3",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/af8a6b1a9d8d44e080451553060a602e1214a7bb/1.14%20Pre-Release%203.json"
          },
          {
            "id": "1.14 Pre-Release 2",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/fcbaaa318bf47cecb0c37da7a37903e4bcf24e90/1.14%20Pre-Release%202.json"
          },
          {
            "id": "1.14 Pre-Release 1",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/76dd36e6b4fb2db5e474dd3b44cd96f3f498433d/1.14%20Pre-Release%201.json"
          },
          {
            "id": "19w14b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/eac7bd3b9b9a8beed783fda4920b76b792120861/19w14b.json"
          },
          {
            "id": "19w14a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/3f547c294bf6f82e76120f760d5574d6b3eb88bc/19w14a.json"
          },
          {
            "id": "3D Shareware v1.34",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/5b59564acaa4cc153b6f934e566226642ed978ab/3D%20Shareware%20v1.34.json"
          },
          {
            "id": "19w13b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/fd82b31c5890e7f118c7ffa9122a0f6b29c87936/19w13b.json"
          },
          {
            "id": "19w13a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/b6b6aa23cbbce46b65e36d0c1bccd4f18438118a/19w13a.json"
          },
          {
            "id": "19w12b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/2b7c619474e2a5c19e43494199d47cafba395abf/19w12b.json"
          },
          {
            "id": "19w12a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/91e9bb4b6af34b07c6a89c95696b988b8156702b/19w12a.json"
          },
          {
            "id": "19w11b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/065fec1702d92598089ad37f9e64b2e52ca30114/19w11b.json"
          },
          {
            "id": "19w11a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/ec8d1b45727e11cec93a813cc8b66bd48a6a3bad/19w11a.json"
          },
          {
            "id": "19w09a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/fe35acc600f18d6247ec9e4228c53447e695f8a3/19w09a.json"
          },
          {
            "id": "19w08b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/8d59acdc1b78c6d4a690c2906bcb0a875f119652/19w08b.json"
          },
          {
            "id": "19w08a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/b21d6ece2b83e7ec488a4536dbe9f9228b744b34/19w08a.json"
          },
          {
            "id": "19w07a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/0be11f1e510a44d0042ad471a72371e7633c9777/19w07a.json"
          },
          {
            "id": "19w06a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/384c37467913bcd11a0d7f8d8b9ec81c7058f1de/19w06a.json"
          },
          {
            "id": "19w05a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/87712b3fed60308203939e9ac846470f4b9672d3/19w05a.json"
          },
          {
            "id": "19w04b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/aaf60b4748fbfa2b08c90c6abb1762fb92cac367/19w04b.json"
          },
          {
            "id": "19w04a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/4eeb1dae750f4152927fe51c5065ca7aa3d53e3e/19w04a.json"
          },
          {
            "id": "19w03c",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/e7a922f060cc4441841e4722b0a6bab631492c1e/19w03c.json"
          },
          {
            "id": "19w03b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/a600b0a22f97147e59cd6060b362086ac84cb13e/19w03b.json"
          },
          {
            "id": "19w03a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/e10947fbb39e5d58fb42000348be423e8c0cad64/19w03a.json"
          },
          {
            "id": "19w02a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/5b51ed792b91ce4d281666c64c49084a134ac11d/19w02a.json"
          },
          {
            "id": "18w50a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/307a38d1f592a92fcff056165ef05323cb499bfc/18w50a.json"
          },
          {
            "id": "18w49a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/7e37cc7f1f8c8d9cde81b7754fda64954578170a/18w49a.json"
          },
          {
            "id": "18w48b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/cece9e08337e073961bd7802672050718bf07d0d/18w48b.json"
          },
          {
            "id": "18w48a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/fff0948616360b5545f236e5900af4c7c6da5d86/18w48a.json"
          },
          {
            "id": "18w47b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/9d60a4e4f408db78e5f7797e8996d87e555674d8/18w47b.json"
          },
          {
            "id": "18w47a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/b9345c8f73a33095fba323ebd4c4784796cf4436/18w47a.json"
          },
          {
            "id": "18w46a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/1b24c105bfb11d85b4f8cb946c89f762cf099aa2/18w46a.json"
          },
          {
            "id": "18w45a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/f8a857bfb02953d2578458402792e3b416d25f9f/18w45a.json"
          },
          {
            "id": "18w44a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/7bee20111c1cd50fb0e26b689ea648ff84989ae6/18w44a.json"
          },
          {
            "id": "18w43c",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/509730930d8dcd19bd3c6db819d33eb00d272ef4/18w43c.json"
          },
          {
            "id": "18w43b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/ba1edcdba89ea57137c04952e4c7755926263a76/18w43b.json"
          },
          {
            "id": "18w43a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/d07adde0060f5cbdb01b90ebc03cde154aacebcb/18w43a.json"
          },
          {
            "id": "1.13.2",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/fa3ddc22146c46bfeb0e9d322c6f83b937e25005/1.13.2.json"
          },
          {
            "id": "1.13.2-pre2",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/7b915c9ca867e916dcbacecdfe19cff3cd94cab8/1.13.2-pre2.json"
          },
          {
            "id": "1.13.2-pre1",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/28eb641c164c2ae0879358f884f42f7e2393c366/1.13.2-pre1.json"
          },
          {
            "id": "1.13.1",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/f37fe6f0912ddb7ac3e7d5201a73d56ce170a57f/1.13.1.json"
          },
          {
            "id": "1.13.1-pre2",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/f82e1057225a7c9dfe3c75b45924a6bfa4aaeafa/1.13.1-pre2.json"
          },
          {
            "id": "1.13.1-pre1",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/73f5439743e168a8270b538061832f22625369c9/1.13.1-pre1.json"
          },
          {
            "id": "18w33a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/495ee0c97c88cf15b6614dd68bc70994413f8e5f/18w33a.json"
          },
          {
            "id": "18w32a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/fa7c2eaa0539d16d3e3887ac16ecd19f25757505/18w32a.json"
          },
          {
            "id": "18w31a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/5f20fbe733b3db3758045626e9ffff050029daf6/18w31a.json"
          },
          {
            "id": "18w30b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/81891c454a12e9bf4a262002d5c89320bb4ae153/18w30b.json"
          },
          {
            "id": "18w30a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/3e9adc4f817f01b8f92e00cb19e2d604473a83d3/18w30a.json"
          },
          {
            "id": "1.13",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/c24c2fd37c8ca2e1c18721e2c77caf4d24c87f92/1.13.json"
          },
          {
            "id": "1.13-pre10",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/0d4e1471e49b9657226ffb8684ed6da72bb5068e/1.13-pre10.json"
          },
          {
            "id": "1.13-pre9",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/43f426cd0895c936110629532c6db46717b2d827/1.13-pre9.json"
          },
          {
            "id": "1.13-pre8",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/28369586c81d7db81d6aea81a6464d2bb1765da8/1.13-pre8.json"
          },
          {
            "id": "1.13-pre7",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/44314cf050787819e3c4b440f736a8c5e18ff862/1.13-pre7.json"
          },
          {
            "id": "1.13-pre6",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/2e5288f29d1cd7b894ed99610828e713c3ba65ac/1.13-pre6.json"
          },
          {
            "id": "1.13-pre5",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/f0500efb357283322169d38fd52d24e195d56e05/1.13-pre5.json"
          },
          {
            "id": "1.13-pre4",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/5722f90decabdc54cf498d5c2e27e3a094c14018/1.13-pre4.json"
          },
          {
            "id": "1.13-pre3",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/26564723c707a7eadfc07db2962295934c846296/1.13-pre3.json"
          },
          {
            "id": "1.13-pre2",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/657c4cf0ac64074dbc4d97de063275aba31c9bc0/1.13-pre2.json"
          },
          {
            "id": "1.13-pre1",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/28db6a1653a70fc1ac1b352e63f542d21397f59d/1.13-pre1.json"
          },
          {
            "id": "18w22c",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/b16aeae7fd19224ec48c0e0937321faae2d241ff/18w22c.json"
          },
          {
            "id": "18w22b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/8e22c333dbaff27f1dfb068aee0a343d7bc3544c/18w22b.json"
          },
          {
            "id": "18w22a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/587dd0b2f3ac3ffd96b2a3451434d1b23b351066/18w22a.json"
          },
          {
            "id": "18w21b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/aaae28bb5baa12bf5c7ca8c7f3cc8c558a39c038/18w21b.json"
          },
          {
            "id": "18w21a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/92a0cd0254365df7df5e7ad7974ad15285020b32/18w21a.json"
          },
          {
            "id": "18w20c",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/a9d4d7cd84c112e644f134cc0cbeb0b2efe1d9e5/18w20c.json"
          },
          {
            "id": "18w20b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/566f11647d85194f292d2300fa550631bf75510a/18w20b.json"
          },
          {
            "id": "18w20a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/a287a82f4f84e9529f8d387f3f23c680d262cf6a/18w20a.json"
          },
          {
            "id": "18w19b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/48a0d019a8ce73d2e492f029e64c9e2791b49339/18w19b.json"
          },
          {
            "id": "18w19a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/56cac74df46a43a6385708beafeed1df79590eb2/18w19a.json"
          },
          {
            "id": "18w16a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/5fcd79de4734a0b058aab67607e44b1a09464290/18w16a.json"
          },
          {
            "id": "18w15a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/c9fe2e1e80b8a5078af2c30cd6b764ca508beaa0/18w15a.json"
          },
          {
            "id": "18w14b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/8b4dc5007c1306f5823cfcefd4dbb1e944c8439e/18w14b.json"
          },
          {
            "id": "18w14a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/c976a8bb4510edcdcaafca651aae6b49df731bc9/18w14a.json"
          },
          {
            "id": "18w11a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/d07fefcabe464b19876597340187732ffd59be5f/18w11a.json"
          },
          {
            "id": "18w10d",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/282418aaec344de75724caaf9b2def18e892b213/18w10d.json"
          },
          {
            "id": "18w10c",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/ab5cfc50c9e95c44d744a9501808621278aec8df/18w10c.json"
          },
          {
            "id": "18w10b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/316ed74ddf2fa0ae65adb2a170ed5aacdada4d51/18w10b.json"
          },
          {
            "id": "18w10a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/fac132e97632d4beff518e7f3f8224c07f9239de/18w10a.json"
          },
          {
            "id": "18w09a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/fecf14145dffb1c28922b3c16f14e2972779b1e8/18w09a.json"
          },
          {
            "id": "18w08b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/3563f3093515369cb24ba5c2d1db610a62e88379/18w08b.json"
          },
          {
            "id": "18w08a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/dc7c9d4df688697de0b2f13dc46749e55cbd00ef/18w08a.json"
          },
          {
            "id": "18w07c",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/c286a5129959684ce6c416f9a150560d6db263af/18w07c.json"
          },
          {
            "id": "18w07b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/dea62b145246671ae46ed157e6ef2cd2de485a1e/18w07b.json"
          },
          {
            "id": "18w07a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/211e0152bce6081564fc9c40603463c04f89d835/18w07a.json"
          },
          {
            "id": "18w06a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/a19117df869fb45cdd7a3692a3a01aab3979253f/18w06a.json"
          },
          {
            "id": "18w05a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/a33a7a4c76821853a7a578920d7d784b91e9581d/18w05a.json"
          },
          {
            "id": "18w03b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/3321f5a7180f93f885b2546368a88a928e11a70a/18w03b.json"
          },
          {
            "id": "18w03a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/a5e5d97e17af55625c66fa993b105fb774c2d967/18w03a.json"
          },
          {
            "id": "18w02a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/8b9bdc1df5d704f0de0a1f2c6b8a721618371213/18w02a.json"
          },
          {
            "id": "18w01a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/58589469cc95d98a7cb18823f9dfdd7f14c9d023/18w01a.json"
          },
          {
            "id": "17w50a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/63a9166163a505dfb457a236e3e5d0f2ae983c2f/17w50a.json"
          },
          {
            "id": "17w49b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/2f0a11dbf1fd65a650310359ccd9c3c36f481688/17w49b.json"
          },
          {
            "id": "17w49a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/9fba986bf446a39962189fb76b4236ea81e2f5f8/17w49a.json"
          },
          {
            "id": "17w48a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/3b07a3dbdf52535bf05c377cbeb4e4308c6dfd42/17w48a.json"
          },
          {
            "id": "17w47b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/687c352e333feb8e36ac38e1a3cad8aa1a45affc/17w47b.json"
          },
          {
            "id": "17w47a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/4f2089e0b8a7c209e811fe2ff86c4f9ab5b7bceb/17w47a.json"
          },
          {
            "id": "17w46a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/a073800fa0f758a0570696446cd16df88ffc65f6/17w46a.json"
          },
          {
            "id": "17w45b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/ad4e836a7bc594aebc70fae5cfda50b2ca410abd/17w45b.json"
          },
          {
            "id": "17w45a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/b9fbd5f68cb9e4d0326d20afeb248595e4a278b8/17w45a.json"
          },
          {
            "id": "17w43b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/6ceca710ad234e4db4c75c8fb9418878f2a8abf7/17w43b.json"
          },
          {
            "id": "17w43a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/50714e6fa84ca0bd804d3fa2f8419bbc08298e76/17w43a.json"
          },
          {
            "id": "1.12.2",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/832d95b9f40699d4961394dcf6cf549e65f15dc5/1.12.2.json"
          },
          {
            "id": "1.12.2-pre2",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/1eff7a3a362a1005f202da0d3b7112b00c6259e7/1.12.2-pre2.json"
          },
          {
            "id": "1.12.2-pre1",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/360cab493afe35971fca74d75fbd6b43c41aa797/1.12.2-pre1.json"
          },
          {
            "id": "1.12.1",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/5b3e7d137ea360e1d418f0cf68de160acf93fbff/1.12.1.json"
          },
          {
            "id": "1.12.1-pre1",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/36781397c4c05b1ee74276afd9247f9dc33ce692/1.12.1-pre1.json"
          },
          {
            "id": "17w31a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/d500ab4e0838c53f4f7ffc5300521df0be9b9853/17w31a.json"
          },
          {
            "id": "1.12",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/da76e0a25ffccf2765f9e86ce61c063e44b2183b/1.12.json"
          },
          {
            "id": "1.12-pre7",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/92c171fe6fcf3c16ba95f03307618bcac5e3d947/1.12-pre7.json"
          },
          {
            "id": "1.12-pre6",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/b1ba9c1c184e57e1bb970cdf4caa35ece8fb4eac/1.12-pre6.json"
          },
          {
            "id": "1.12-pre5",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/f5dab6422cd2471a7a1b26435c912679cf66c58a/1.12-pre5.json"
          },
          {
            "id": "1.12-pre4",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/8e05acd26ca220bb6399f396c0be0893bc74808d/1.12-pre4.json"
          },
          {
            "id": "1.12-pre3",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/47d8cbd470539006d9825de3a890f07e342e4168/1.12-pre3.json"
          },
          {
            "id": "1.12-pre2",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/5d014cb12b9aecd84a8d08a7f70bdac55ded1f26/1.12-pre2.json"
          },
          {
            "id": "1.12-pre1",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/80d68dc92cdf2557aada495061e93c2ce4f5ca08/1.12-pre1.json"
          },
          {
            "id": "17w18b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/69a0095dd897d6ef87fd449328215d4f3d71c78d/17w18b.json"
          },
          {
            "id": "17w18a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/659b3c3b8578d45d265b58a0f1e428c044183ab2/17w18a.json"
          },
          {
            "id": "17w17b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/8cd9ea793f3ee4608edf4fac8efad1b68fbceb65/17w17b.json"
          },
          {
            "id": "17w17a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/9599f29c91fc8f57a77f7a79f4676a09e2ca1fe4/17w17a.json"
          },
          {
            "id": "17w16b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/38e2d76bea9091f1ed89e9f9c5b4630fcec103d9/17w16b.json"
          },
          {
            "id": "17w16a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/b0369bcb956a4853bcc094ffe0020964061a1379/17w16a.json"
          },
          {
            "id": "17w15a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/84285c1ad87efc7f59ef75ca4e35ddf57c7193ae/17w15a.json"
          },
          {
            "id": "17w14a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/3d56c3a0ac83f263ab173de90dd6f044523a5274/17w14a.json"
          },
          {
            "id": "17w13b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/b06914e45949d4d0167e339daea5217dc2f1f3c4/17w13b.json"
          },
          {
            "id": "17w13a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/c5d31a532de28fd250af810ed468a6bd70f3de54/17w13a.json"
          },
          {
            "id": "17w06a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/a2a4b51368580cf7abc22d99d360eab2d4f2fec4/17w06a.json"
          },
          {
            "id": "1.11.2",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/fa3f6d94a9fad648ff97d18fd710997261a421e8/1.11.2.json"
          },
          {
            "id": "1.11.1",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/b244f9fc1721a2ac90b6e12220f5e40246d2c84d/1.11.1.json"
          },
          {
            "id": "16w50a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/d4db7d96831cec8c3ad090110dfffae8f6f52aec/16w50a.json"
          },
          {
            "id": "1.11",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/935062464617c9904d20045065515cfd3f1b76d2/1.11.json"
          },
          {
            "id": "1.11-pre1",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/7bdd264a5a18799413f665a808de94451af68cb7/1.11-pre1.json"
          },
          {
            "id": "16w44a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/a75c5e9b85de3c7f89e1acbe02702dd4515df5eb/16w44a.json"
          },
          {
            "id": "16w43a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/ecdc354d9d658e08c5371a7ce961e4aa35849913/16w43a.json"
          },
          {
            "id": "16w42a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/a133f828ccd3261131132a504729e3106f17f071/16w42a.json"
          },
          {
            "id": "16w41a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/802bb9d6882c23e6f47e844c09d97914f1e90491/16w41a.json"
          },
          {
            "id": "16w40a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/c5c9e009d6875b2b54c231fb81cea4670b7950d5/16w40a.json"
          },
          {
            "id": "16w39c",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/636990dd6311f6cadddf50c1e4c0a51f8fcdaf2d/16w39c.json"
          },
          {
            "id": "16w39b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/e4aac42badba700c6b8364ee5ebdc6a3b09073ca/16w39b.json"
          },
          {
            "id": "16w39a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/a550f22fab3e847433aa3289c6bedbca49057527/16w39a.json"
          },
          {
            "id": "16w38a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/687018ed85a2784dc63695af097daa280c9a8093/16w38a.json"
          },
          {
            "id": "16w36a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/b49e747382603492f3ca5617a661f39c0c4e4e77/16w36a.json"
          },
          {
            "id": "16w35a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/1ea0cec35ba30ccf2359303a8fbfd643179f0bcf/16w35a.json"
          },
          {
            "id": "16w33a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/e9fde68c65264789e91e61ce3d5db783fd537d2c/16w33a.json"
          },
          {
            "id": "16w32b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/f5e6026e390a7fde3928682740425d49a44d7786/16w32b.json"
          },
          {
            "id": "16w32a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/66d012257108f502883cee77b2ecd7cc40aa6ebc/16w32a.json"
          },
          {
            "id": "1.10.2",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/819460dcabf1a2e41b0cf65d342b18ad8dc12281/1.10.2.json"
          },
          {
            "id": "1.10.1",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/9c23be6c5a48ab7dc7698586b5d7177fff4b441a/1.10.1.json"
          },
          {
            "id": "1.10",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/a827abf9c022a08ed9c4c7807a8c1b7f2f05deca/1.10.json"
          },
          {
            "id": "1.10-pre2",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/16ae6b8daf0522d443a64b79b04fae94077027f0/1.10-pre2.json"
          },
          {
            "id": "1.10-pre1",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/0ac1b4475692d7e7d457bf16ad6dfac040e9f265/1.10-pre1.json"
          },
          {
            "id": "16w21b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/49b8423070619688f106e5fa6f4fd9176fc54a93/16w21b.json"
          },
          {
            "id": "16w21a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/325467ff1dae5a0ef55427a0a7a81c9c7e65ceea/16w21a.json"
          },
          {
            "id": "16w20a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/9286a8e316080ccf271051a014abc7d886469979/16w20a.json"
          },
          {
            "id": "1.9.4",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/b1a314ce2b67b3639bd6407ddcd549ce236de6f6/1.9.4.json"
          },
          {
            "id": "1.9.3",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/4d37195227760207d397224c509ded4b0c68ea37/1.9.3.json"
          },
          {
            "id": "1.9.3-pre3",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/bd10c446533e8059a6bb0018525e1bce31572bb9/1.9.3-pre3.json"
          },
          {
            "id": "1.9.3-pre2",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/e179d52f490ab24205b495cb6554f172077db374/1.9.3-pre2.json"
          },
          {
            "id": "1.9.3-pre1",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/75c4b0e87d82f8972f9513797915ab8624c60177/1.9.3-pre1.json"
          },
          {
            "id": "16w15b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/0d4cf718d11fc50923c10d331be462c11836beb7/16w15b.json"
          },
          {
            "id": "16w15a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/13ae720e4e324deb0f7a7dbbdfb37c330d3adcf2/16w15a.json"
          },
          {
            "id": "16w14a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/c748934ad99af11076a95658af606686bdcbce7d/16w14a.json"
          },
          {
            "id": "1.RV-Pre1",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/23761c1cc8b5c7c72f6604e1e7322a056a6af2f8/1.RV-Pre1.json"
          },
          {
            "id": "1.9.2",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/9623ca73a57c6d183a28513c894c2337cfe65995/1.9.2.json"
          },
          {
            "id": "1.9.1",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/fdca0cf4bdab9959fce30413202a00a1bce35be5/1.9.1.json"
          },
          {
            "id": "1.9.1-pre3",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/2fa68c071c9cc440e792d70f3b2c2e02e016d657/1.9.1-pre3.json"
          },
          {
            "id": "1.9.1-pre2",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/8da8881815e3d53da86adbdc051f836d0c4e2b93/1.9.1-pre2.json"
          },
          {
            "id": "1.9.1-pre1",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/1e7ecc95790b3bac41c4c59e9c7186c8b35e3bb3/1.9.1-pre1.json"
          },
          {
            "id": "1.9",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/9178828493e41a24452841039710f05728c466d6/1.9.json"
          },
          {
            "id": "1.9-pre4",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/47874af37fe9a921ed0386321445be1dd5754976/1.9-pre4.json"
          },
          {
            "id": "1.9-pre3",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/b34824eb8099df04af6542722d571ab20381b416/1.9-pre3.json"
          },
          {
            "id": "1.9-pre2",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/99775b58e157766cb7c4058b244a1a2b357b0889/1.9-pre2.json"
          },
          {
            "id": "1.9-pre1",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/06ae803d5a838a287548f6414b8ede0ebcefe64b/1.9-pre1.json"
          },
          {
            "id": "16w07b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/d7abe006dec5beaffac1eb5fcddf86731f6eb97d/16w07b.json"
          },
          {
            "id": "16w07a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/73a10d7e61011af19d4c00565bc4faeaae693c7b/16w07a.json"
          },
          {
            "id": "16w06a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/86dfa5200058cdb6f96cd2648ec86ddd04bbaf41/16w06a.json"
          },
          {
            "id": "16w05b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/f89c22833e743a144e56aaed3e238c142148d9b2/16w05b.json"
          },
          {
            "id": "16w05a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/848849c124e368f87bca8a990cbdc9043f678366/16w05a.json"
          },
          {
            "id": "16w04a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/ec6cfa675974817435326b87987a512c5af7fbdf/16w04a.json"
          },
          {
            "id": "16w03a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/d254f6fc2e3abb57e016feb6734bfa6ff38802eb/16w03a.json"
          },
          {
            "id": "16w02a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/1ba834734412a1d7532e85844a32ec2ba18c1580/16w02a.json"
          },
          {
            "id": "15w51b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/40b2a92fcabe632c1239c615188f802a36b3854d/15w51b.json"
          },
          {
            "id": "15w51a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/a120a6cce86982907628a84aca21cfc6b9064463/15w51a.json"
          },
          {
            "id": "15w50a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/8356a6a93d89e3cc95328b4ee6bbd0697e0de200/15w50a.json"
          },
          {
            "id": "15w49b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/f8472901afe69ddbe599112d9fc656d3adcd1d5c/15w49b.json"
          },
          {
            "id": "1.8.9",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/d546f1707a3f2b7d034eece5ea2e311eda875787/1.8.9.json"
          },
          {
            "id": "15w49a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/4b2fbb35b426fbd63932801bd5f198229dfd0f62/15w49a.json"
          },
          {
            "id": "15w47c",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/2e61f29ace59ae1d4d1cb1473b673b225115dc8a/15w47c.json"
          },
          {
            "id": "15w47b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/dd2a6ff3fd726a25ea42b020764a0f1c4e935849/15w47b.json"
          },
          {
            "id": "15w47a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/3bab1680f0ec6330a832457f466654c03d799a0e/15w47a.json"
          },
          {
            "id": "15w46a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/8b40019e05283d502aab6bcf40fa498e333cb08c/15w46a.json"
          },
          {
            "id": "15w45a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/c581934b794e798ce74736fd3e802128a44aa698/15w45a.json"
          },
          {
            "id": "15w44b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/17c7995e26759d671cb4ba41485b7ddf05bc2aba/15w44b.json"
          },
          {
            "id": "15w44a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/dfce16ddf5118c95bb981ae7d84448ad3a60fc73/15w44a.json"
          },
          {
            "id": "15w43c",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/9a348e6e81aadc6fb563f1586149424af39d5268/15w43c.json"
          },
          {
            "id": "15w43b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/2a40420c0409f6f8fc24efe2c904e03715b22623/15w43b.json"
          },
          {
            "id": "15w43a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/4aaabcbd0079e99840294002ebed569801729483/15w43a.json"
          },
          {
            "id": "15w42a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/7b18842c1dbbe945d991851ffaff49ecd7efbb91/15w42a.json"
          },
          {
            "id": "15w41b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/27ab9716cf332d457be085a808eb170fe1a1ff2c/15w41b.json"
          },
          {
            "id": "15w41a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/38026b4c0301e3441d8e0d5b367392d3212dc51d/15w41a.json"
          },
          {
            "id": "15w40b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/a00ee3d8eb0c1cb38d928f5efb4a473768fa5286/15w40b.json"
          },
          {
            "id": "15w40a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/f5c9662f1674f7f0e55e82a77109ad88a6bc9df7/15w40a.json"
          },
          {
            "id": "15w39c",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/134e9d87a2c86e82d98bc7f8ba5965b7fd6634c1/15w39c.json"
          },
          {
            "id": "15w39b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/909aa3af2988edc58b1e9c66f906a883d9a34815/15w39b.json"
          },
          {
            "id": "15w39a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/7f914aa1098b8b35e20e9c021b57378d0a8fcc6c/15w39a.json"
          },
          {
            "id": "15w38b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/222a234de865b9147cad4e3b2545d8af93c35065/15w38b.json"
          },
          {
            "id": "15w38a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/1b4dcb4c07599a5e5571d9d71570641086e821e4/15w38a.json"
          },
          {
            "id": "15w37a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/9459c8c56ba4577b69cc12a9034769f0d20fb3dc/15w37a.json"
          },
          {
            "id": "15w36d",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/49a6f0d3a233d103b5fdeb6aefd7a6b0208b5ce9/15w36d.json"
          },
          {
            "id": "15w36c",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/b1a04bae902de441013791777aa0461d446bd2c7/15w36c.json"
          },
          {
            "id": "15w36b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/2268159e9ce438054660ac86d55db3ddfed1e20b/15w36b.json"
          },
          {
            "id": "15w36a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/c185b19d54c00e43f85c610858909c40f9163708/15w36a.json"
          },
          {
            "id": "15w35e",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/1fade4fe9d2587106ac3fa14775f9126d3198103/15w35e.json"
          },
          {
            "id": "15w35d",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/f7eeb1ed37ec5c38cd8a04ba1fe90a50a1b24752/15w35d.json"
          },
          {
            "id": "15w35c",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/362bda12d03da60b8481c79f4779bba7a2602c89/15w35c.json"
          },
          {
            "id": "15w35b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/fda82bd0b305eba9607742b9314a41a54f0a9952/15w35b.json"
          },
          {
            "id": "15w35a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/801ae2c7be9b3e558a7aef6c766bddb74d4be66a/15w35a.json"
          },
          {
            "id": "15w34d",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/3c0d347369147a3951163679127a5bf8e78be5a2/15w34d.json"
          },
          {
            "id": "15w34c",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/44d6774de6881154fd5f9ac6154dee5f202eb121/15w34c.json"
          },
          {
            "id": "15w34b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/3bec850cf623d63b26caf462b0be177bc9954a0a/15w34b.json"
          },
          {
            "id": "15w34a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/b8fdc5838196c33646a68610ed7586678a53b085/15w34a.json"
          },
          {
            "id": "15w33c",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/c602ac43b9f2c23b4c39999a6368bbccd31852ca/15w33c.json"
          },
          {
            "id": "15w33b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/c108562e1ee548ba05439441e97fdcb0b01d1194/15w33b.json"
          },
          {
            "id": "15w33a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/e5b7e666fd697aef925f539d3983d03ed5d4457e/15w33a.json"
          },
          {
            "id": "15w32c",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/2bf1e36bc4099bba503063ec507b7600ca088e4c/15w32c.json"
          },
          {
            "id": "15w32b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/59db82d67a0a1c6b6a31d22cd050ff6c43f1611b/15w32b.json"
          },
          {
            "id": "15w32a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/4e80b2295bdb531e64326c4d3fbf93e8d330c5e7/15w32a.json"
          },
          {
            "id": "15w31c",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/1345a9c6d2442415e5980c12fd7bd838072dbd90/15w31c.json"
          },
          {
            "id": "15w31b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/c9c8d4b706ebb7a057bb91ac69d84ea060b8d174/15w31b.json"
          },
          {
            "id": "15w31a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/4c9ad2064a55148bef3da7d98dde8d9ff50596ea/15w31a.json"
          },
          {
            "id": "1.8.8",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/690172f1227e1c1d2fa8fceadd0f578f7851a69e/1.8.8.json"
          },
          {
            "id": "1.8.7",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/7152f102903cd3ce7514d84c8ac98efecac30839/1.8.7.json"
          },
          {
            "id": "1.8.6",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/acccbb056a3e8f3086c4614974fb3a894317853a/1.8.6.json"
          },
          {
            "id": "1.8.5",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/16da5f5be7478f3602c25182a90f2057ba2f60d8/1.8.5.json"
          },
          {
            "id": "1.8.4",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/043b84efde9fc25d849e979329c03101ac9b7795/1.8.4.json"
          },
          {
            "id": "15w14a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/e9349d236c0f4b8760f75621b3eaad538055c759/15w14a.json"
          },
          {
            "id": "1.8.3",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/413ad8fdcf8f29f4f1c2b4425aa0dade00f75dd4/1.8.3.json"
          },
          {
            "id": "1.8.2",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/1e35829856a71261f5a7b2b3a83012c7434b2203/1.8.2.json"
          },
          {
            "id": "1.8.2-pre7",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/d07a07da8ffe68a0929710c72346073a02a94933/1.8.2-pre7.json"
          },
          {
            "id": "1.8.2-pre6",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/07ae1d9b67d36399e239a2ff46d43a1f96ef141a/1.8.2-pre6.json"
          },
          {
            "id": "1.8.2-pre5",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/08e7827173655705e938233cf148f955b4f67901/1.8.2-pre5.json"
          },
          {
            "id": "1.8.2-pre4",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/db4c583ec25447f7418fc8e458798905a1282b88/1.8.2-pre4.json"
          },
          {
            "id": "1.8.2-pre3",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/3d371e2f8c3b04b44c76ae908a1e6f800895aa80/1.8.2-pre3.json"
          },
          {
            "id": "1.8.2-pre2",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/50c6a27cbbd2df6adff74aaea9953a00c6ce38e3/1.8.2-pre2.json"
          },
          {
            "id": "1.8.2-pre1",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/79c984156100e076c37316d6d6377ced3daaf379/1.8.2-pre1.json"
          },
          {
            "id": "1.8.1",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/62f9f77f67fd7d6c92cfae57cecd445be14ccd4e/1.8.1.json"
          },
          {
            "id": "1.8.1-pre5",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/4460bbf278fef1312f03c1483599c31149fe85a7/1.8.1-pre5.json"
          },
          {
            "id": "1.8.1-pre4",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/e9024ad2831e3fc4450977aafe7bb3d07ff0d542/1.8.1-pre4.json"
          },
          {
            "id": "1.8.1-pre3",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/c2f5fb57bf63012594b3dc34a80a8d888ec017ac/1.8.1-pre3.json"
          },
          {
            "id": "1.8.1-pre2",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/8e77dedf93135552e1aaaebcec4c8d154d4dea04/1.8.1-pre2.json"
          },
          {
            "id": "1.8.1-pre1",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/f470d54d32f9e1d1a02e4e84e33b2407325ab62d/1.8.1-pre1.json"
          },
          {
            "id": "1.8",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/9eb165eef46294062d8698c8a78e8ac914949e7a/1.8.json"
          },
          {
            "id": "1.8-pre3",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/7fd3abc53ee1f813f5b574c8dc758fd694b6abd3/1.8-pre3.json"
          },
          {
            "id": "1.8-pre2",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/2c6bf8e3d17565117bbb5e188544439518d3ad95/1.8-pre2.json"
          },
          {
            "id": "1.8-pre1",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/00ddc59925abc10e08047c94657e3365b1e031d6/1.8-pre1.json"
          },
          {
            "id": "14w34d",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/e314c5316fc189a9883f5a786a6b9daffcff8e84/14w34d.json"
          },
          {
            "id": "14w34c",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/a82b66557f41c05f41477481e39be5d5ceec3c62/14w34c.json"
          },
          {
            "id": "14w34b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/f24d3b4a363411fec20a36c2bd92a62b628be003/14w34b.json"
          },
          {
            "id": "14w34a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/dc020c20f2d7a79dee3f601317a8a7cb191c0538/14w34a.json"
          },
          {
            "id": "14w33c",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/de314d5c6f011057f764e546a212731d40736c1f/14w33c.json"
          },
          {
            "id": "14w33b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/dec4943bf73d83402d455243f83c8c550e36f7b5/14w33b.json"
          },
          {
            "id": "14w33a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/a1a938359171774c96e06f54bc0c12352a9d7992/14w33a.json"
          },
          {
            "id": "14w32d",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/414e33e7d03d873966c199d959426da08aa5aebc/14w32d.json"
          },
          {
            "id": "14w32c",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/3dfa2c82cd06c89735ac0c9b05151b4994efab19/14w32c.json"
          },
          {
            "id": "14w32b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/6230265cc1f324689cb5fbb7df21235ca0013e70/14w32b.json"
          },
          {
            "id": "14w32a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/3af16f96e7800a8f0c31500a873b008c00036c84/14w32a.json"
          },
          {
            "id": "14w31a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/1243fe2c047064613e42a2c0e7ce0018fdf94035/14w31a.json"
          },
          {
            "id": "14w30c",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/6327714a7712f723bb74492e2f5fcbb92b8b12a9/14w30c.json"
          },
          {
            "id": "14w30b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/dddd3cf12b88f179baa286a9bb51f4c3902c3780/14w30b.json"
          },
          {
            "id": "14w30a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/f73b4bad130911c1ef16066aeb740574f20f90f7/14w30a.json"
          },
          {
            "id": "14w29b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/02a4803aa427d29f9db910d22b263686d0135fcc/14w29b.json"
          },
          {
            "id": "14w29a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/5219707e16e90d57fbba55f635b68e4725d72b8f/14w29a.json"
          },
          {
            "id": "14w28b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/c18437b0194fb2af464b5fe0cb67ed0eeafb44e8/14w28b.json"
          },
          {
            "id": "14w28a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/6d6b755e76453633e464ed09f82b0979a414d8e4/14w28a.json"
          },
          {
            "id": "14w27b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/08f1ed6374fb9d87e34fe81ab50d19d01e3055dc/14w27b.json"
          },
          {
            "id": "14w27a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/c0e594ad64eac1b322e4724b92292daad80951eb/14w27a.json"
          },
          {
            "id": "14w26c",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/2fe002bebd830ccb5328329ed7efb7e9fb555519/14w26c.json"
          },
          {
            "id": "14w26b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/288aa1d9c5840c8d0f75ee682bc8a0a1564babfb/14w26b.json"
          },
          {
            "id": "14w26a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/6d41ffb32ced2eaaeed6b0ddd38b5e53f849c25f/14w26a.json"
          },
          {
            "id": "14w25b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/d8b348b5a412e809748f35f694fe5dc395a83b3a/14w25b.json"
          },
          {
            "id": "14w25a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/0091b9fe0f95dc765e187840ff41235638ce22d6/14w25a.json"
          },
          {
            "id": "14w21b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/c5791a666929e783ba360e98247ff744b5ac3520/14w21b.json"
          },
          {
            "id": "14w21a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/f8c912b97cf684f4339571b27592e85b7ec84a19/14w21a.json"
          },
          {
            "id": "14w20b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/b4b682e67ff47a689cf3ff0b405eeec5758dfa9a/14w20b.json"
          },
          {
            "id": "14w20a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/674e75f032a5473ad91531dfbfa7b8cb42f55f71/14w20a.json"
          },
          {
            "id": "1.7.10",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/ed5d8789ed29872ea2ef1c348302b0c55e3f3468/1.7.10.json"
          },
          {
            "id": "1.7.10-pre4",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/f2a4a03329bb07d70d4837b6893c435f97deed25/1.7.10-pre4.json"
          },
          {
            "id": "1.7.10-pre3",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/94578a1fc1db7cb804a9be044008e54367f4905e/1.7.10-pre3.json"
          },
          {
            "id": "1.7.10-pre2",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/2e8103cd14fc9a7db0c56f68cbc41a0b26ea9954/1.7.10-pre2.json"
          },
          {
            "id": "1.7.10-pre1",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/a526665974dfa717f79f15529ae294d0a6074fc5/1.7.10-pre1.json"
          },
          {
            "id": "14w19a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/ffcc6382a2d12310c42cc1b654ea8d88117cf105/14w19a.json"
          },
          {
            "id": "14w18b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/0aa29d5bc6915b347505a194260bd51bc8bf2960/14w18b.json"
          },
          {
            "id": "14w18a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/c64cc4d300948e2d8e5fb05e394b69edc680027e/14w18a.json"
          },
          {
            "id": "14w17a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/2d857ecd809f15008f4718dc3b11ef5b60548ce4/14w17a.json"
          },
          {
            "id": "14w11b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/022ade13058d98289f1625857462994a6ec40110/14w11b.json"
          },
          {
            "id": "1.7.9",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/5579bc9e25a9bb5e3187a2570693a0c6658edce4/1.7.9.json"
          },
          {
            "id": "1.7.8",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/03d8e2e1c192d48ffc406cb7a483861cf26dfe25/1.7.8.json"
          },
          {
            "id": "1.7.7",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/47e228263557da73d0e2be803e5d83e5b246ae75/1.7.7.json"
          },
          {
            "id": "1.7.6",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/b6dd3e6496ad415f0c57867dea1f97710d5f184c/1.7.6.json"
          },
          {
            "id": "14w11a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/ed3b597f26c1140b31d4c7421054e83398270e19/14w11a.json"
          },
          {
            "id": "1.7.6-pre2",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/977e8f92b306b2d798a7b69858f48fbe06dbb302/1.7.6-pre2.json"
          },
          {
            "id": "1.7.6-pre1",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/39e402b6972475126fa9e8a883915a9ce5d7722a/1.7.6-pre1.json"
          },
          {
            "id": "14w10c",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/312e632fcac49d7c1dca6a7fa58824eace01d91d/14w10c.json"
          },
          {
            "id": "14w10b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/90e924daa64f7908e69d4c7c4451599d2592f9d3/14w10b.json"
          },
          {
            "id": "14w10a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/643d852decb88d011fab20df4cb14ed100362f0f/14w10a.json"
          },
          {
            "id": "14w08a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/4c04557fe5dcfe1c2e302265b677549384008c14/14w08a.json"
          },
          {
            "id": "1.7.5",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/4afb628501a6a206b80a47ab4f29ea6b98caac90/1.7.5.json"
          },
          {
            "id": "14w07a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/23dbadcc03150f2e3447d528f7f546ba8fd62246/14w07a.json"
          },
          {
            "id": "14w06b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/2c381742bc9cadc33fbc0a823b4fb734aad78533/14w06b.json"
          },
          {
            "id": "14w06a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/a59d77f95afc36421554f9fee3a930d6cca9209d/14w06a.json"
          },
          {
            "id": "14w05b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/0b0f0bb2354640bfeeafe8611a8cfb53e9c3edff/14w05b.json"
          },
          {
            "id": "14w05a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/e9d4eb5a505a84dda9c36ea32f7ebb998a60a97f/14w05a.json"
          },
          {
            "id": "14w04b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/62524cf35e56e365a5dff36353fb77a38ff35269/14w04b.json"
          },
          {
            "id": "14w04a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/41307eaf3c2bf6b526986d8bb2fd698099298a2f/14w04a.json"
          },
          {
            "id": "14w03b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/4c3bab6bfb32daed6b30d298818e4b8bb37c4bb2/14w03b.json"
          },
          {
            "id": "14w03a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/73f7ed186402ac8927ce415507cfa70b6aa5483f/14w03a.json"
          },
          {
            "id": "14w02c",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/e7c40fe6754d5912ebc119a53e752c9024130e3f/14w02c.json"
          },
          {
            "id": "14w02b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/25f758976bfd97d533af7e38680db8983d2cf82d/14w02b.json"
          },
          {
            "id": "14w02a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/1348f531ae51631ea0ee1e467348440c5f93dcc2/14w02a.json"
          },
          {
            "id": "1.7.4",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/5db9d89cb6b89573384f324aa585b4c99525b37a/1.7.4.json"
          },
          {
            "id": "1.7.3",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/cd133f90b7e339c50b3cdce64188a51469c6a128/1.7.3.json"
          },
          {
            "id": "13w49a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/82cf56aabfbca3a1f1d13b4404050d9877b5a67e/13w49a.json"
          },
          {
            "id": "13w48b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/55543db98b2df3a986c99d8cdc8278a70493eb4a/13w48b.json"
          },
          {
            "id": "13w48a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/329f28adfb5ba0d6d81ceae27209e1eb97c4ef88/13w48a.json"
          },
          {
            "id": "13w47e",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/81b30470c108a201cfb2dfd548dc0a52afa20a0a/13w47e.json"
          },
          {
            "id": "13w47d",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/ccf62018b2e8aa9628dab2353ed85a4239368f63/13w47d.json"
          },
          {
            "id": "13w47c",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/ca7616ffa259c99e2350f010555eba54e54b4dd0/13w47c.json"
          },
          {
            "id": "13w47b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/ac1dc3c3a7d33aa47e97c7b3d419510696f57cde/13w47b.json"
          },
          {
            "id": "13w47a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/9bb727f63e3af146df7cbd47a6a3332d31550855/13w47a.json"
          },
          {
            "id": "1.7.2",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/c2e8ecbf355760a74c93d7210767fa043d53f27c/1.7.2.json"
          },
          {
            "id": "1.7.1",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/744a42505862bea0bdd5da55ff06e09536f36d66/1.7.1.json"
          },
          {
            "id": "1.7",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/7a5aa5f3e3fba022efe0752660a5c7cd2dff2d16/1.7.json"
          },
          {
            "id": "13w43a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/d7c2d81bf137c9e1a84576241767de08909c29fd/13w43a.json"
          },
          {
            "id": "13w42b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/ce863b81986e6acce2983be040d2071711f6403c/13w42b.json"
          },
          {
            "id": "13w42a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/8cef2eee33892b62b3a28559246c750c3487dd8f/13w42a.json"
          },
          {
            "id": "13w41b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/015456cd8b5c68d0076536d4e867111cd36b541a/13w41b.json"
          },
          {
            "id": "13w41a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/43622c17e011441b8b63b0a27d79887c2f7516aa/13w41a.json"
          },
          {
            "id": "13w39b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/b2d2f0b1fd23b08f8d2fb9beff39f173a2d65160/13w39b.json"
          },
          {
            "id": "13w39a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/61b88e8c311ed6a647ebf13d9934c6a1e3a94a75/13w39a.json"
          },
          {
            "id": "13w38c",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/a9e87e0699f19fea280878f5deb744c5d5d3ccb1/13w38c.json"
          },
          {
            "id": "13w38b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/6f426be1993b140ab5d10459c91eb1f542d58c82/13w38b.json"
          },
          {
            "id": "13w38a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/e6dc1d9f9c8efeec67af438d5bf61be082f6e8a4/13w38a.json"
          },
          {
            "id": "1.6.4",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/b71bae449192fbbe1582ff32fb3765edf0b9b0a8/1.6.4.json"
          },
          {
            "id": "13w37b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/b8d28154ee056af6af3c8c37815418fe0e9f34f8/13w37b.json"
          },
          {
            "id": "1.6.3",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/903d6ba1bc87c301d88fa418f8b33446201c7d4e/1.6.3.json"
          },
          {
            "id": "13w37a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/2f33c613a4bb81ef5f56be03a8f578208ada382a/13w37a.json"
          },
          {
            "id": "13w36b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/4a538e23057a596fc8c7e04d8a7738d866467f51/13w36b.json"
          },
          {
            "id": "13w36a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/bc915c4dc167dfba92fcc0ae3aa051ae0f9f089b/13w36a.json"
          },
          {
            "id": "1.6.2",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/c0729761bf65dc58138ce508645dba1442fa78b8/1.6.2.json"
          },
          {
            "id": "1.6.1",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/7fd8e0c76f62813eb0465e31bb74b160c01472d6/1.6.1.json"
          },
          {
            "id": "1.6",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/20116297638f7c70cd046e25a6ac90fee4cae61a/1.6.json"
          },
          {
            "id": "13w26a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/b349702aef5e3adaebec30c79338300423943930/13w26a.json"
          },
          {
            "id": "13w25c",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/934788bc580ef0a19725ee5bd31f02a0b866e0bf/13w25c.json"
          },
          {
            "id": "13w25b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/8b7870ddd0d0b38779479ad782d65ad80e688cf7/13w25b.json"
          },
          {
            "id": "13w25a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/65c0e5fff89b477ac6f8ddb336f0e718d525d311/13w25a.json"
          },
          {
            "id": "13w24b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/e1294b52803771cfb06767c4c40dced70475cb25/13w24b.json"
          },
          {
            "id": "13w24a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/74666ab85cc5539f08aec638eabd63a552ed4125/13w24a.json"
          },
          {
            "id": "13w23b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/f17829f3e412b9b727437ec9f8433bdfc6c7b9a7/13w23b.json"
          },
          {
            "id": "13w23a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/8234057ec006c5bb62a28ca4f6787323968438e6/13w23a.json"
          },
          {
            "id": "13w22a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/597a15f27cc0913a77ff7e1e9c62c3affc627fe8/13w22a.json"
          },
          {
            "id": "13w21b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/98f66e115fbab6dcd05f2e5e0a23dd78c0a5e7a3/13w21b.json"
          },
          {
            "id": "13w21a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/aebfb9b82f0712de3e6ef78bc2cafe5dcb742130/13w21a.json"
          },
          {
            "id": "13w19a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/8bb131515d6b483baa76f1b42ea5a1018d11bb22/13w19a.json"
          },
          {
            "id": "13w18c",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/93738bf22f33d9ba5e2980bec849b097a5050c8f/13w18c.json"
          },
          {
            "id": "13w18b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/2cab9aae9eef3558d6abe8ac2708ea19322a1594/13w18b.json"
          },
          {
            "id": "13w18a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/79bef69b5542046e705a57784cc63574748effe2/13w18a.json"
          },
          {
            "id": "13w17a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/d21e61b16b0e446b5062e8ee72c9d0ff3bfbd155/13w17a.json"
          },
          {
            "id": "1.5.2",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/924a2dcd8bdc31f8e9d36229811c298b3537bbc7/1.5.2.json"
          },
          {
            "id": "13w16b",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/5f4e1c860d1c79d346f3e4574615ca1fd9da01ed/13w16b.json"
          },
          {
            "id": "13w16a",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/c355e2ee0495dfcc8ec9806955c8d2993179b40c/13w16a.json"
          },
          {
            "id": "1.5.1",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/3c514114d9c2a3ea78f72c4f9fb4eeb56747135a/1.5.1.json"
          },
          {
            "id": "1.5",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/bb882e3d97bee9c5b5e486da04b85f977e770150/1.5.json"
          },
          {
            "id": "1.4.7",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/7aa8e9aeacf4e1076bfd81c096f78de9b883ebe6/1.4.7.json"
          },
          {
            "id": "1.4.5",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/d64a902a48a6a618f9a0a82c183be454e7a1f23b/1.4.5.json"
          },
          {
            "id": "1.4.6",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/09832797138da79745ade734da775f44c254066b/1.4.6.json"
          },
          {
            "id": "1.4.4",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/f7de827181036b09444abb6b64c1fcc663b8e98e/1.4.4.json"
          },
          {
            "id": "1.4.3",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/3ab416ac64dac1a6123402a8aabd8ef3caeef087/1.4.3.json"
          },
          {
            "id": "1.4.2",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/2fd77aa19aba2860bbf4c1fd9f84f232703dd287/1.4.2.json"
          },
          {
            "id": "1.4.1",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/14c3ba517b5baabdfc61b60eb49d9aa7da012906/1.4.1.json"
          },
          {
            "id": "1.4",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/d979a4671611bf8704c0a2a0cf09964ca25eefd7/1.4.json"
          },
          {
            "id": "1.3.2",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/598eedd6f67db4aefbae6ed119029e3d7373ecf5/1.3.2.json"
          },
          {
            "id": "1.3.1",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/637aa8466c4dac462b88682caaf753290f37798f/1.3.1.json"
          },
          {
            "id": "1.3",
            "type": "snapshot",
            "url": "https://piston-meta.mojang.com/v1/packages/b384219c6d4879e56b92eea01a0d986e20d55dea/1.3.json"
          },
          {
            "id": "1.2.5",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/5158765caf1ca14958cb6c45d52c8e09ed9b046c/1.2.5.json"
          },
          {
            "id": "1.2.4",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/69a67fcf11ed1298c6b43a00d64461908a318749/1.2.4.json"
          },
          {
            "id": "1.2.3",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/2f7eaec33e3017a413c677eefa59df2e5919e536/1.2.3.json"
          },
          {
            "id": "1.2.2",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/4e2e449ba0b8b5da7055f0decea1a3257b282f17/1.2.2.json"
          },
          {
            "id": "1.2.1",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/1a45c035ebb969dbac4e0c39582e974ad7f74a9e/1.2.1.json"
          },
          {
            "id": "1.1",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/c0cb9368dbdbb1e8dbcb9363a28d8da74cf6fc5e/1.1.json"
          },
          {
            "id": "1.0",
            "type": "release",
            "url": "https://piston-meta.mojang.com/v1/packages/75062586b830dd5160f13f1c9130eb365e01f1b9/1.0.json"
          },
          {
            "id": "b1.8.1",
            "type": "old_beta",
            "url": "https://piston-meta.mojang.com/v1/packages/440e3b845c3991492a3d0c5f0ccfda78ab90d9b6/b1.8.1.json"
          },
          {
            "id": "b1.8",
            "type": "old_beta",
            "url": "https://piston-meta.mojang.com/v1/packages/e5b20b1a15daa60effefd86da94b118086214e8b/b1.8.json"
          },
          {
            "id": "b1.7.3",
            "type": "old_beta",
            "url": "https://piston-meta.mojang.com/v1/packages/44f6969326bd45aa00dcd3c4ca3a7c05ebb24c04/b1.7.3.json"
          },
          {
            "id": "b1.7.2",
            "type": "old_beta",
            "url": "https://piston-meta.mojang.com/v1/packages/00f5aff7cbf6ce109ecf2c8e1a5dc1bcbadb5680/b1.7.2.json"
          },
          {
            "id": "b1.7",
            "type": "old_beta",
            "url": "https://piston-meta.mojang.com/v1/packages/f3a725f9f27e90f2a2622ad82c182c1a1178572f/b1.7.json"
          },
          {
            "id": "b1.6.6",
            "type": "old_beta",
            "url": "https://piston-meta.mojang.com/v1/packages/16cb1aa6f7c9c3953fa2f53abd8f57558efd3e71/b1.6.6.json"
          },
          {
            "id": "b1.6.5",
            "type": "old_beta",
            "url": "https://piston-meta.mojang.com/v1/packages/eae37053bb49092ce93d40e762f4c3a573ee2880/b1.6.5.json"
          },
          {
            "id": "b1.6.4",
            "type": "old_beta",
            "url": "https://piston-meta.mojang.com/v1/packages/ac98b5e9e44038f3a311736111c16fc30006e1fd/b1.6.4.json"
          },
          {
            "id": "b1.6.3",
            "type": "old_beta",
            "url": "https://piston-meta.mojang.com/v1/packages/87785f4386cd308defcc876fb6d62bf3681be6bc/b1.6.3.json"
          },
          {
            "id": "b1.6.2",
            "type": "old_beta",
            "url": "https://piston-meta.mojang.com/v1/packages/23f8e2f1634d1db8875521d8e0d3fb5340623fd2/b1.6.2.json"
          },
          {
            "id": "b1.6.1",
            "type": "old_beta",
            "url": "https://piston-meta.mojang.com/v1/packages/1958ecd7b20c5a2849b4e1e7a9921891e49178da/b1.6.1.json"
          },
          {
            "id": "b1.6",
            "type": "old_beta",
            "url": "https://piston-meta.mojang.com/v1/packages/7442961ad4f23c60787ab2a3c97a5037c40a92f2/b1.6.json"
          },
          {
            "id": "b1.5_01",
            "type": "old_beta",
            "url": "https://piston-meta.mojang.com/v1/packages/0f0b24408e6ca445e9c4a3ea2a676f71f96f5d35/b1.5_01.json"
          },
          {
            "id": "b1.5",
            "type": "old_beta",
            "url": "https://piston-meta.mojang.com/v1/packages/3fa704bd73444368f04351d6d4add8a3eead9b4e/b1.5.json"
          },
          {
            "id": "b1.4_01",
            "type": "old_beta",
            "url": "https://piston-meta.mojang.com/v1/packages/d47fcb0e4d9b7169fbb26c0bce56ed2082c3bb1d/b1.4_01.json"
          },
          {
            "id": "b1.4",
            "type": "old_beta",
            "url": "https://piston-meta.mojang.com/v1/packages/2cf34d1caca87b68ee104e348480e38f45eb7621/b1.4.json"
          },
          {
            "id": "b1.3_01",
            "type": "old_beta",
            "url": "https://piston-meta.mojang.com/v1/packages/a0e0a27d8f7d4c23b6441e473a3e44b45a958284/b1.3_01.json"
          },
          {
            "id": "b1.3b",
            "type": "old_beta",
            "url": "https://piston-meta.mojang.com/v1/packages/16ffb877701f7b41c6f27fb09def7a8e5d667df1/b1.3b.json"
          },
          {
            "id": "b1.2_02",
            "type": "old_beta",
            "url": "https://piston-meta.mojang.com/v1/packages/5352763f0a944e7940e718fd66aae03bc57dc2ef/b1.2_02.json"
          },
          {
            "id": "b1.2_01",
            "type": "old_beta",
            "url": "https://piston-meta.mojang.com/v1/packages/0fea71dc8c4199581753d8ecb3ae69039a302340/b1.2_01.json"
          },
          {
            "id": "b1.2",
            "type": "old_beta",
            "url": "https://piston-meta.mojang.com/v1/packages/67bcdada56d272e4508ecb8e35827ffa4a4c18d1/b1.2.json"
          },
          {
            "id": "b1.1_02",
            "type": "old_beta",
            "url": "https://piston-meta.mojang.com/v1/packages/01042e0ecdd894894ebc6f45300ae306010c154f/b1.1_02.json"
          },
          {
            "id": "b1.1_01",
            "type": "old_beta",
            "url": "https://piston-meta.mojang.com/v1/packages/1bab185d888a549a3fcb4e528557caa3e7884290/b1.1_01.json"
          },
          {
            "id": "b1.0.2",
            "type": "old_beta",
            "url": "https://piston-meta.mojang.com/v1/packages/e0a317286013bdd8e6de6da5e709422af61597d8/b1.0.2.json"
          },
          {
            "id": "b1.0_01",
            "type": "old_beta",
            "url": "https://piston-meta.mojang.com/v1/packages/d3eec813918ee87826f7bca65dd1558b33841798/b1.0_01.json"
          },
          {
            "id": "b1.0",
            "type": "old_beta",
            "url": "https://piston-meta.mojang.com/v1/packages/e5348beaf3d3c366c522b1c70044f8b7be168b02/b1.0.json"
          },
          {
            "id": "a1.2.6",
            "type": "old_alpha",
            "url": "https://piston-meta.mojang.com/v1/packages/1c888e4d8aed380db25aeb3835f5918297bb5e3a/a1.2.6.json"
          },
          {
            "id": "a1.2.5",
            "type": "old_alpha",
            "url": "https://piston-meta.mojang.com/v1/packages/a925f00e3f7f1bde95240152bef4d15f36971394/a1.2.5.json"
          },
          {
            "id": "a1.2.4_01",
            "type": "old_alpha",
            "url": "https://piston-meta.mojang.com/v1/packages/64d6a749cb24ddd8a27546f9555ac7c2853c5943/a1.2.4_01.json"
          },
          {
            "id": "a1.2.3_04",
            "type": "old_alpha",
            "url": "https://piston-meta.mojang.com/v1/packages/59c7719b82023e5b71e334a69d3c13137014a2bc/a1.2.3_04.json"
          },
          {
            "id": "a1.2.3_02",
            "type": "old_alpha",
            "url": "https://piston-meta.mojang.com/v1/packages/b22eadebb4bfb63cdc42e9811da8fd2234eaaa6e/a1.2.3_02.json"
          },
          {
            "id": "a1.2.3_01",
            "type": "old_alpha",
            "url": "https://piston-meta.mojang.com/v1/packages/da7b740e70324be7e189c65f1f834f0a30c0588f/a1.2.3_01.json"
          },
          {
            "id": "a1.2.3",
            "type": "old_alpha",
            "url": "https://piston-meta.mojang.com/v1/packages/6c059b7bdb14b29c8d5cca2b250472962fe3b0b1/a1.2.3.json"
          },
          {
            "id": "a1.2.2b",
            "type": "old_alpha",
            "url": "https://piston-meta.mojang.com/v1/packages/2aba3e114e0a7190ea3dff1553787d5044e1c420/a1.2.2b.json"
          },
          {
            "id": "a1.2.2a",
            "type": "old_alpha",
            "url": "https://piston-meta.mojang.com/v1/packages/03cde2f4856b59adab177ab10673b6d951bfd7c8/a1.2.2a.json"
          },
          {
            "id": "a1.2.1_01",
            "type": "old_alpha",
            "url": "https://piston-meta.mojang.com/v1/packages/f20e3a7757a92e1d429dcf45fa545cc84a9699da/a1.2.1_01.json"
          },
          {
            "id": "a1.2.1",
            "type": "old_alpha",
            "url": "https://piston-meta.mojang.com/v1/packages/05773451d61d92c0e8fa73cdb2e4c0fd23c4e1d4/a1.2.1.json"
          },
          {
            "id": "a1.2.0_02",
            "type": "old_alpha",
            "url": "https://piston-meta.mojang.com/v1/packages/57ff567f186230b303af60241fbce283dad44bb2/a1.2.0_02.json"
          },
          {
            "id": "a1.2.0_01",
            "type": "old_alpha",
            "url": "https://piston-meta.mojang.com/v1/packages/bed2a50ed2f9ce6a920394916ea66ce41b09b166/a1.2.0_01.json"
          },
          {
            "id": "a1.2.0",
            "type": "old_alpha",
            "url": "https://piston-meta.mojang.com/v1/packages/abc94a77d94b94042d01476ee0c2e4b8c4eb08e1/a1.2.0.json"
          },
          {
            "id": "a1.1.2_01",
            "type": "old_alpha",
            "url": "https://piston-meta.mojang.com/v1/packages/8730e3503e352fc03cca8a6c6ee614a17d66d8c6/a1.1.2_01.json"
          },
          {
            "id": "a1.1.2",
            "type": "old_alpha",
            "url": "https://piston-meta.mojang.com/v1/packages/b515b79ecaba79a0b5a4a5a03bf2b077f6c53334/a1.1.2.json"
          },
          {
            "id": "a1.1.0",
            "type": "old_alpha",
            "url": "https://piston-meta.mojang.com/v1/packages/6054271bd0a275ed3030be97b6e9f81977abdf5d/a1.1.0.json"
          },
          {
            "id": "a1.0.17_04",
            "type": "old_alpha",
            "url": "https://piston-meta.mojang.com/v1/packages/fc2b6231e945558df29b6ed12522758860c511ab/a1.0.17_04.json"
          },
          {
            "id": "a1.0.17_02",
            "type": "old_alpha",
            "url": "https://piston-meta.mojang.com/v1/packages/a261074f38c555d9770ba7f1a4cae9351af19d73/a1.0.17_02.json"
          },
          {
            "id": "a1.0.16",
            "type": "old_alpha",
            "url": "https://piston-meta.mojang.com/v1/packages/205ed38d0d1e135b467702a746e64ed2623b4679/a1.0.16.json"
          },
          {
            "id": "a1.0.15",
            "type": "old_alpha",
            "url": "https://piston-meta.mojang.com/v1/packages/05a0fdef0a0d62273290eb1c145ad10501941f75/a1.0.15.json"
          },
          {
            "id": "a1.0.14",
            "type": "old_alpha",
            "url": "https://piston-meta.mojang.com/v1/packages/5af21fa2467997914940beb39279f0d545a48335/a1.0.14.json"
          },
          {
            "id": "a1.0.11",
            "type": "old_alpha",
            "url": "https://piston-meta.mojang.com/v1/packages/b98235f44e6422741df02c781cf0016fce1c4a84/a1.0.11.json"
          },
          {
            "id": "a1.0.5_01",
            "type": "old_alpha",
            "url": "https://piston-meta.mojang.com/v1/packages/4adaca651189d96ea9d7aa031038ab7b7d3fd807/a1.0.5_01.json"
          },
          {
            "id": "a1.0.4",
            "type": "old_alpha",
            "url": "https://piston-meta.mojang.com/v1/packages/16c818f17af9e8560589f9e3cae57f0931011c25/a1.0.4.json"
          },
          {
            "id": "inf-20100618",
            "type": "old_alpha",
            "url": "https://piston-meta.mojang.com/v1/packages/51a5c512af384d3d2a79a3efb93f7d4b9a1c6ec2/inf-20100618.json"
          },
          {
            "id": "c0.30_01c",
            "type": "old_alpha",
            "url": "https://piston-meta.mojang.com/v1/packages/9392d3f635770ac4dfd3f8c9444f319b00b08945/c0.30_01c.json"
          },
          {
            "id": "c0.0.13a",
            "type": "old_alpha",
            "url": "https://piston-meta.mojang.com/v1/packages/5ef11c52e02c27f40924ea0c323efee716de568d/c0.0.13a.json"
          },
          {
            "id": "c0.0.13a_03",
            "type": "old_alpha",
            "url": "https://piston-meta.mojang.com/v1/packages/21122dee2365147033ef6214702098cf7b2549bd/c0.0.13a_03.json"
          },
          {
            "id": "c0.0.11a",
            "type": "old_alpha",
            "url": "https://piston-meta.mojang.com/v1/packages/2339fd5639204675b9f18dff6055dae83fc91c7e/c0.0.11a.json"
          },
          {
            "id": "rd-161348",
            "type": "old_alpha",
            "url": "https://piston-meta.mojang.com/v1/packages/f22a3882d124ef4468f6eb50b12836c53286e18a/rd-161348.json"
          },
          {
            "id": "rd-160052",
            "type": "old_alpha",
            "url": "https://piston-meta.mojang.com/v1/packages/0cac2ceab812568826c6e5aeb4cf980397550479/rd-160052.json"
          },
          {
            "id": "rd-20090515",
            "type": "old_alpha",
            "url": "https://piston-meta.mojang.com/v1/packages/a3165080e2b0bf20519eac5f55ee841f3491e277/rd-20090515.json"
          },
          {
            "id": "rd-132328",
            "type": "old_alpha",
            "url": "https://piston-meta.mojang.com/v1/packages/4ec49ff663f96e78a5cf0d9538adb9d1358fc485/rd-132328.json"
          },
          {
            "id": "rd-132211",
            "type": "old_alpha",
            "url": "https://piston-meta.mojang.com/v1/packages/d090f5d3766a28425316473d9ab6c37234d48b02/rd-132211.json"
          }
        ]
      },
    };

    return fakeData.server;
  };

  useEffect(() =>{
    const data = fetchServerData()
    
    let type = serverConfig.type
    //@ts-ignore
    setVersions(data[serverConfig.type])



  }, [serverConfig.type])

  useEffect(() =>{
    const data = fetchServerData()
    //@ts-ignore
    setVersions(data[serverConfig.type])


  }, [])



  const changeFiltro = (e: any, tecnologia:string) => {
    
    let servers = fetchServerData()
    setFiltro(tecnologia);
    if(!e.target.checked){
      setVersions(servers["java"]); //! MAL
        return;
    }

    


      if(tecnologia == "snapshot" || tecnologia == "release")
      {
        //@ts-ignore
        servers = servers.java.filter((server: any) => server.type == tecnologia);
      } 


      
            //@ts-ignore
      setVersions(servers);
    
  }


  const handleVersionSelect = (version: string) => {
    setSelectedVersion(version);
  };
  
  const handleServerTypeSelect = (serverType: string, serverName: string) => {
    setSelectedServerName(serverName);
    setSelectedServerType(serverType);
  };

  const handleNext = () => {
    if (selectedVersion) {
      setServerConfig((prev: any) => ({
        ...prev,
        version: selectedVersion,
      }));
      onNext(); // Avanzar al siguiente paso
    }
  };

  return (
    <div className="flex flex-col gap-4 max-h-96 overflow-y-auto overflow-hidden">
      {/* Título */}
      <h2 className="text-xl font-bold">Step 3: Choose Server Version</h2>

      {/* Subtítulo */}
      <p className="text-gray-600">
        Select a version for your <strong>{serverConfig.serverName}</strong> server:
      </p>

      {/* Lista de versiones */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {
              serverConfig.type == "java" && (
              <div className="flex gap-3 items-center justify-center">
                <div className="flex gap-2">
                <input type="checkbox" id="snapshot" onChange={(e) => changeFiltro(e,"snapshot")} />
                <label htmlFor="snapshot">Snapshot</label>
                </div>
                <div className="flex gap-2">
                <input type="checkbox" id="release" onChange={(e) => changeFiltro(e,"release")}/>
                <label htmlFor="release">Release</label>
                </div>

   
                    
                </div>
              )
            }
            <br />

            
            {
              serverConfig.type == "java" && (
            versions?.map((server) => (
              <button
                key={server.id}
                onClick={() => handleServerTypeSelect(server.type, server.id)}
                onDoubleClick={handleNext}
                className={`p-4 border rounded-lg ${
                  selectedServerName === server.id 
                    ? "border-blue-500"
                    : "border-gray-300"
                } hover:border-blue-500 focus:outline-none`}
              >
                
                <p className="text-center mt-2 font-medium">
                  {server.id}
                </p>
                
              </button>
            )))}

            {
              serverConfig.type == "bedrock" && (
                versions?.map((server) => (
                <button
                key={server.version + server.type}
                onClick={() => handleServerTypeSelect(server.type, server.version)}
                onDoubleClick={handleNext}
                className={`p-4 border rounded-lg ${
                  selectedServerName === server.version && selectedServerType === server.type
                    ? "border-blue-500"
                    : "border-gray-300"
                } hover:border-blue-500 focus:outline-none`}
              >
                <p className="text-center mt-2 font-medium">{server.type}</p>
                <p className="text-center mt-2 font-medium">{server.version}</p>

              </button>))
              )
            }



          </div>

      {/* Botones de navegación */}
      <div className="flex justify-between mt-4">
        <button
          onClick={onBack}
          className="bg-gray-300 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-400"
        >
          Back
        </button>
        <button
          onClick={handleNext}
          disabled={!selectedVersion}
          className={`py-2 px-4 rounded-lg ${
            selectedVersion
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "bg-gray-300 text-gray-800 cursor-not-allowed"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ServerVersionStep;
