import Caver from "caver-js";
const caver = new Caver("https://api.baobab.klaytn.net:8651");

export default async (req, res) => {
  const kip7 = new caver.kct.kip7("0xaa27499753d621c79a8d08df8e6e989aba311fe0");

  kip7
    .balanceOf(req.body.account)
    .then((result) =>
      res.status(200).json({ amount: result / Math.pow(10, 18) })
    )
    .catch((err) => {
      res.status(400).json({ text: "error" });
    });
};
