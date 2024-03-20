<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-2 p-0">
                <aside class="navigation-sidebar">
                    <ul>
                        <div class="title">
                            <h2>PAINEL</h2>
                        </div>
                    </ul>
                </aside>
            </div>
            <div class="col-lg-8 offset-lg-1">
                <div class="row" style="gap: 10px 0;">
                    <div class="col-lg-4">
                        <div class="card">
                            <a type="button" class="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                CADASTRAR NOVO LIVRO
                            </a>
                            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static"
                                data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel"
                                aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="staticBackdropLabel">CADASTRAR NOVO LIVRO
                                            </h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <div class="form-group mt-2">
                                                <label for="Titulo">Titulo</label>
                                                <input type="Titulo" class="form-control" name="Titulo" id="Titulo"
                                                    placeholder="Titulo" autocomplete="Titulo" />
                                            </div>
                                            <div class="form-group mt-2">
                                                <div class="autor">
                                                    <label for="autor">Autor</label>
                                                    <input id="autor" type="autor" autocomplete="new-autor"
                                                        aria-describedby="autor" class="form-control"
                                                        placeholder="autor" />
                                                </div>
                                                <div id="pass-error"></div>
                                            </div>
                                            <div class="form-group mt-2">
                                                <div class="editora">
                                                    <label for="editora">Editora</label>
                                                    <input id="editora" type="editora" autocomplete="new-editora"
                                                        aria-describedby="editora" class="form-control"
                                                        placeholder="editora" />
                                                </div>
                                                <div id="pass-error"></div>
                                            </div>
                                            <div class="form-group mt-2">
                                                <label for="user-type">Selecionar Categoria</label>
                                                <select class="form-control" required>
                                                    <option value="">Categoria</option>
                                                    <option value="Terror">Terror</option>
                                                    <option value="Drama">Drama</option>
                                                    <option value="Crime">Crime</option>
                                                </select>
                                            </div>
                                            <div class="form-group mt-2">
                                                <div class="ano">
                                                    <label for="ano">Ano de publicação</label>
                                                    <input id="ano" type="ano" autocomplete="new-ano"
                                                        aria-describedby="ano" class="form-control" placeholder="ano" />
                                                </div>
                                                <div id="pass-error"></div>
                                            </div>
                                            <div class="form-group mt-2">
                                                <div class="ISBN">
                                                    <label for="ISBN">ISBN</label>
                                                    <input id="ISBN" type="ISBN" autocomplete="new-ISBN"
                                                        aria-describedby="ISBN" class="form-control"
                                                        placeholder="ISBN" />
                                                </div>
                                                <div id="pass-error"></div>
                                            </div>
                                            <div class="form-group mt-2">
                                                <div class="qtt">
                                                    <label for="qtt">Disponivel</label>
                                                    <input id="qtt" type="number" autocomplete="new-qtt"
                                                        aria-describedby="qtt" class="form-control"
                                                        placeholder="Quantidade" />
                                                </div>
                                                <div id="pass-error"></div>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-primary">CADASTRAR</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <div class="card">
                            <a type="button" class="btn" data-bs-toggle="modal" data-bs-target="#modal-loan">
                                SOLICITAÇÃO DE EMPRESTIMO
                            </a>
                            <div class="modal fade" id="modal-loan" data-bs-backdrop="static" data-bs-keyboard="false"
                                tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="staticBackdropLabel">CADASTRAR NOVO LIVRO
                                            </h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <ul class="solicitation">
                                                <li>
                                                    <div class="name">
                                                        <span>FULANO</span>
                                                    </div>
                                                    <div class="response">
                                                        <div class="aprove">
                                                            <button type="button"
                                                                class="btn btn-success">Aprovar</button>
                                                        </div>
                                                        <div class="recusar">
                                                            <button type="button"
                                                                class="btn btn-danger">Recusar</button>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="name">
                                                        <span>FULANO</span>
                                                    </div>
                                                    <div class="response">
                                                        <div class="aprove">
                                                            <button type="button"
                                                                class="btn btn-success">Aprovar</button>
                                                        </div>
                                                        <div class="recusar">
                                                            <button type="button"
                                                                class="btn btn-danger">Recusar</button>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="name">
                                                        <span>CICLANO</span>
                                                    </div>
                                                    <div class="response">
                                                        <div class="aprove">
                                                            <button type="button"
                                                                class="btn btn-success">Aprovar</button>
                                                        </div>
                                                        <div class="recusar">
                                                            <button type="button"
                                                                class="btn btn-danger">Recusar</button>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="name">
                                                        <span>BELTRANO</span>
                                                    </div>
                                                    <div class="response">
                                                        <div class="aprove">
                                                            <button type="button"
                                                                class="btn btn-success">Aprovar</button>
                                                        </div>
                                                        <div class="recusar">
                                                            <button type="button"
                                                                class="btn btn-danger">Recusar</button>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <div class="card">
                            <a type="button" class="btn" data-bs-toggle="modal" data-bs-target="#modal-notification">
                                ENVIAR NOTIFICAÇÃO
                            </a>
                            <div class="modal fade" id="modal-notification" data-bs-backdrop="static"
                                data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel"
                                aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="staticBackdropLabel">ENVIAR NOTIFICAÇÃO
                                            </h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <ul class="solicitation">
                                                <li>
                                                    <div class="name">
                                                        <span>FULANO</span>
                                                    </div>
                                                    <div class="response">
                                                        <div class="aprove">
                                                            <button type="button" class="btn btn-primary">ENVIAR
                                                                NOTIFICAÇÃO</button>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="col-lg-4">
                        <div class="card">
                            <a type="button" class="btn" data-bs-toggle="modal" data-bs-target="#modal-relatorio">
                                GERAR RELATORIOS
                            </a>
                            <div class="modal fade" id="modal-relatorio" data-bs-backdrop="static"
                                data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel"
                                aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="staticBackdropLabel">GERAR RELATORIOS
                                            </h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <nav>
                                                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                                    <button class="nav-link active" id="nav-home-tab"
                                                        data-bs-toggle="tab" data-bs-target="#nav-home" type="button"
                                                        role="tab" aria-controls="nav-home"
                                                        aria-selected="true">LIVROS</button>
                                                    <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab"
                                                        data-bs-target="#nav-profile" type="button" role="tab"
                                                        aria-controls="nav-profile"
                                                        aria-selected="false">USUARIOS</button>
                                                </div>
                                            </nav>
                                            <div class="tab-content" id="nav-tabContent">
                                                <div class="tab-pane fade show active" id="nav-home" role="tabpanel"
                                                    aria-labelledby="nav-home-tab" tabindex="0">
                                                    <ul class="solicitation mt-3">
                                                        <li>
                                                            <div class="name">
                                                                <span>ARTE DA GUERRA</span>
                                                            </div>
                                                            <div class="response">
                                                                <div class="aprove">
                                                                    <button type="button" class="btn btn-primary">GERAR
                                                                        RELATORIO</button>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="tab-pane fade" id="nav-profile" role="tabpanel"
                                                    aria-labelledby="nav-profile-tab" tabindex="0">
                                                    <ul class="solicitation mt-3">
                                                        <li>
                                                            <div class="name">
                                                                <span>FULANO</span>
                                                            </div>
                                                            <div class="response">
                                                                <div class="aprove">
                                                                    <button type="button" class="btn btn-primary">GERAR
                                                                        RELATORIO</button>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.navigation-sidebar {
    position: relative;
    box-shadow: 0 3px 6px rgba(0, 0, 0, .2);
    min-height: 100vh;
    margin: 0 0 13px;
    padding: 20px 5px;

    li {
        list-style: none;
    }
}

.card {
    height: 200px;
    transition: all .3s ease;
    cursor: pointer;

    a {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #000;
        font-weight: 700;
        width: 100%;
        height: 100%;

        &:active,
        &:focus {
            border: none;
        }
    }

    &:hover {
        background-color: #000;

        a {
            color: #fff;
        }
    }
}

.solicitation {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 0;

    li {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .name {
            font-weight: 600;
        }

        .response {
            display: flex;
            align-items: center;
            gap: 12px;
        }
    }
}
</style>