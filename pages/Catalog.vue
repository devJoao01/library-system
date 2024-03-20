<template>
    <section class="content-page">
        <div class="container">
            <div class="search-box">
                <div class="row">
                    <div class="col-lg-8 component">
                        <input type="text" name="search" class="input-search" id="search"
                            placeholder="Pesquisar Livros">
                        <button class="btn">pesquisar</button>
                    </div>
                    <div class="col-lg-4">
                        <select class="form-control" required>
                            <option value="">Selecione a Categoria</option>
                            <option value="Terror">Terror</option>
                            <option value="Drama">Drama</option>
                            <option value="Crime">Crime</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4" v-for="(card, index) in cards" :key="index">
                    <div class="card" :class="{ 'indisponivel': !card.disponivel }">
                        <div class="card-thumb">
                            <img src="../static/book.jpeg" alt="book">
                        </div>
                        <div class="card-body">
                            <p v-html="card.body"></p>
                            <div class="status" :class="{ 'indisponivel': !card.disponivel }">
                                <span>{{ card.disponivel ? 'DISPONÍVEL' : 'INDISPONÍVEL' }}</span>
                                <div v-if="card.disponivel" class="status">
                                    <button type="button" class="btn btn-primary mt-2 w-100" data-bs-toggle="modal"
                                        data-bs-target="#staticBackdrop">
                                        EMPRESTAR
                                    </button>
                                </div>
                            </div>
                            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static"
                                data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel"
                                aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <div class="tab-pane fade show active" id="pills-home" role="tabpanel"
                                                aria-labelledby="pills-home-tab" tabindex="0">
                                                <div class="form-group">
                                                    <label for="nome">NOME</label>
                                                    <input type="nome" class="form-control" name="nome" id="nome"
                                                        placeholder="SEU NOME" autocomplete="nome" />
                                                </div>
                                               <div class="info">
                                                <span>DATA-ATUAL: 19/04/2024</span>
                                                <span>DATA-DEVOLUÇÃO: 30/04/2024</span>
                                               </div>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary"
                                                data-bs-dismiss="modal">Close</button>
                                            <button type="button" class="btn btn-primary">Understood</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            cards: []
        };
    },
    async created() {
        try {
            const response = await this.$axios.$get('https://jsonplaceholder.typicode.com/posts');
            response.forEach(card => {
                card.disponivel = Math.random() < 0.5;
            });
            this.cards = response.slice(0, 6);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
}
</script>

<style scoped lang="scss">
.content-page {
    .search-box {
        margin-bottom: 30px;
    }

    .component {
        position: relative;
        height: 62px;

        .input-search {
            background-color: #efefef;
            padding: 0 10px;
            color: #000;
            width: 100%;
            height: 100%;
            overflow: hidden;
        }

        button {
            position: absolute;
            right: 12px;
            background-color: #000;
            color: #efefef;
            border-radius: 0;
        }
    }

    .card {
        border: none;

        .card-thumb {
            display: flex;
            justify-content: center;
            margin-bottom: 20px;
        }

        .card-body {
            .status {
                span {
                    display: block;
                    padding: 3px;
                    text-align: center;
                    border-radius: 30px;
                    color: #fff;
                    background-color: #008000;
                }
            }

            .status.indisponivel span {
                background-color: #FF0000;

            }
        }

    }

    .info{
        span{
            display: block;
            font-weight:700;
            margin: 10px 0;
        }
    }
}
</style>
