<vegetable-detail>
    <h1>{ opts.name }</h1>
    <script>
        console.log('vegetable-detailだよ');
        this.on('unmount', function() {
            console.log('vegetable-detail が unmount された')
        })
    </script>
</vegetable-detail>