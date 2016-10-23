<vegetable-index>
    <div class="row">
        <div class="col-md-2">
            <div id="nav">
                <div class="list-group">
                    <a href="/#/vegetables/1" class="list-group-item">にんじん</a>
                    <a href="/#/vegetables/2" class="list-group-item">かぼちゃ</a>
                    <a href="/#/vegetables/3" class="list-group-item">れたす</a>
                </div>
            </div>
        </div>
        <div class="col-md-10">
            <div id="page">
                <h1>やさいいんでっくす</h1>
            </div>
        </div>
    </div>
    <script>
        this.on('unmount', function() {
            console.log('vegetable-index が unmount された')
        })
    </script>
    <style>
        h1 {
            margin-top: 0;
        }
    </style>
</vegetable-index>