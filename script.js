const botoesSelecionar = document.querySelectorAll(".selecionar-item");
const selectLanche = document.getElementById("lanche");
const formPedido = document.getElementById("form-pedido");
const resumoPedido = document.getElementById("resumo-pedido");

botoesSelecionar.forEach((botao) => {
  botao.addEventListener("click", () => {
    const itemEscolhido = botao.getAttribute("data-item");
    selectLanche.value = itemEscolhido;
    document.getElementById("pedido").scrollIntoView({ behavior: "smooth" });
  });
});

formPedido.addEventListener("submit", (event) => {
  event.preventDefault();

  const nome = document.getElementById("cliente").value.trim();
  const lanche = selectLanche.value;
  const obs = document.getElementById("observacoes").value.trim();

  resumoPedido.classList.remove("hidden");
  resumoPedido.innerHTML = `
    <p class="font-bold text-base mb-1">Pedido registrado com sucesso!</p>
    <p><strong>Cliente:</strong> ${nome}</p>
    <p><strong>Item:</strong> ${lanche}</p>
    <p><strong>Observações:</strong> ${obs || "Nenhuma"}</p>
  `;
});
