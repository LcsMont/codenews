function status(request, response) {
  response.status(200).json({ chave: "Minha família!" });
}

export default status;
