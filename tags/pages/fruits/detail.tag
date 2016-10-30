<fruit-detail>
    <h1>みかん</h1>
    <script>
        console.log('fruit-detailだよ');
        this.on('unmount', function() {
            console.log('fruit-detail が unmount された')
        })
    </script>
</fruit-detail>