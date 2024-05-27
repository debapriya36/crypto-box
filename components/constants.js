const DEBAPRIYA = {
  BIO: "I am a passionate backend developer from India!",
  LINKEDIN: "https://www.linkedin.com/in/debapriya-chandra-126114201/",
  GITHUB: "https://github.com/debapriya36",
  EMAIL: "debapriyachandra03@gmail.com",
};

const GAURAV = {
  BIO: "I am a final year student @JGEC",
  LINKEDIN: "https://www.linkedin.com/in/agaurav3008",
  EMAIL: "ga2424@it.jgec.ac.in",
};

const RITAM = {
  BIO: "B.Tech Final year undergraduate in Information Technology. from JGEC",
  LINKEDIN: "https://www.linkedin.com/in/ritam23/",
  EMAIL : "rs2423@it.jgec.ac.in"
};

const AVIRAL = {
  BIO: "B.Tech Final year undergraduate in Information Technology. from JGEC",
  LINKEDIN: "https://www.linkedin.com/in/ritam23/",
  EMAIL : "rs2423@it.jgec.ac.in"
};

const DOCS_LINK = "https://github.com/Mcverickk/box-protocol-contracts";

const NETWORK_NAME = "Polygon";
const NETWORK_ID = 137;

const ADDRESS = "0x20563804042bA40Db4Ed56a5FC0f0c65b4aC376D";

const ABI = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_tokenSymbol",
        type: "string",
      },
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_tokenPriceFeed",
        type: "address",
      },
    ],
    name: "addToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint24",
        name: "sellBoxId",
        type: "uint24",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "sellTokenAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint24",
        name: "buyBoxId",
        type: "uint24",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "buyTokenAmount",
        type: "uint256",
      },
    ],
    name: "BoxSwap",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint24",
        name: "boxId",
        type: "uint24",
      },
    ],
    name: "buy",
    outputs: [
      {
        internalType: "uint256",
        name: "boxTokenMinted",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "boxId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "buyAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "boxTokenReceived",
        type: "uint256",
      },
    ],
    name: "Buy",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "uint8",
            name: "percentage",
            type: "uint8",
          },
        ],
        internalType: "struct BoxProtocol.Token[]",
        name: "tokens",
        type: "tuple[]",
      },
    ],
    name: "createBox",
    outputs: [
      {
        internalType: "uint256",
        name: "boxId",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint24",
        name: "boxId",
        type: "uint24",
      },
      {
        internalType: "uint256",
        name: "tokenSellAmount",
        type: "uint256",
      },
    ],
    name: "sell",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "boxId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "sellAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountReceived",
        type: "uint256",
      },
    ],
    name: "Sell",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint24",
        name: "sellBoxId",
        type: "uint24",
      },
      {
        internalType: "uint24",
        name: "buyBoxId",
        type: "uint24",
      },
    ],
    name: "swapBox",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_walletAddress",
        type: "address",
      },
    ],
    name: "whitelistAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint24",
        name: "",
        type: "uint24",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "boxBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "exists",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint24",
        name: "boxId",
        type: "uint24",
      },
      {
        internalType: "uint256",
        name: "tokenNumber",
        type: "uint256",
      },
    ],
    name: "getBoxDistribution",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "uint8",
            name: "percentage",
            type: "uint8",
          },
        ],
        internalType: "struct BoxProtocol.Token",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint24",
        name: "boxId",
        type: "uint24",
      },
    ],
    name: "getBoxTokenPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint24",
        name: "boxId",
        type: "uint24",
      },
    ],
    name: "getBoxTVL",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenPriceFeed",
        type: "address",
      },
    ],
    name: "getLatestPrice",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint24",
        name: "boxId",
        type: "uint24",
      },
    ],
    name: "getNumberOfTokensInBox",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "poolFee",
    outputs: [
      {
        internalType: "uint24",
        name: "",
        type: "uint24",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "swapRouter",
    outputs: [
      {
        internalType: "contract ISwapRouter",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "uri",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const OFFICIAL_BOXES = [
  {
    boxId: 0,
    boxName: "Blue Chip",
    tokenDistribution: [
      { token: "BTC", value: "40%" },
      { token: "ETH", value: "30%" },
      { token: "MATIC", value: "20%" },
      { token: "LINK", value: "10%" },
    ],
  },
  {
    boxId: 1,
    boxName: "Metaverse",
    tokenDistribution: [
      { token: "APE", value: "40%" },
      { token: "MANA", value: "30%" },
      { token: "SAND", value: "30%" },
    ],
  },
  {
    boxId: 2,
    boxName: "Stable Coins",
    tokenDistribution: [
      { token: "USDC", value: "40%" },
      { token: "USDT", value: "30%" },
      { token: "DAI", value: "30%" },
    ],
  },
];

const SUPPORTED_TOKENS = [
  "MATIC",
  "USDT",
  "USDC",
  "MANA",
  "SAND",
  "DAI",
  "APE",
];

const CREATE_BOX_MESSAGE =
  "Our platform offers a 'Create Box' feature that empowers users to curate personalized boxes of cryptocurrency assets. With this feature, box creators can also set a commission fee, enabling them to earn a share of the trading volume generated by their custom box.";

export {
  CREATE_BOX_MESSAGE,
  SUPPORTED_TOKENS,
  DEBAPRIYA,
  GAURAV,
  RITAM,
  DOCS_LINK,
  ABI,
  ADDRESS,
  OFFICIAL_BOXES,
  NETWORK_ID,
  NETWORK_NAME,
};
