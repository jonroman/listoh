<script>
    export default {
        data: function() {
            return {
                message: 'I am in a box'
            }
        },
        template: `
            <div id="box"> {{ message }} </div>
        `,
    }
</script>

<style scoped>
    .box {
        border: 2px red;
        color: purple;
        background-color: greey;
    }
</style>
