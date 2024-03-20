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
                                    <button class="btn btn-primary mt-2 w-100">Emprestar</button>
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
}
</style>
