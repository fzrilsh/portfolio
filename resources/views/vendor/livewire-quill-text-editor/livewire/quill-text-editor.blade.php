<div wire:ignore>

    <div id="{{ $quillId }}"></div>

    <div class="flex justify-between items-center border-t border-gray-100 pt-1">
        <div class="text-xs text-gray-400">
            Words: <span id="quill-word-length">0</span>
        </div>
        <div class="text-xs text-gray-400">
            Chars: <span id="quill-char-length">0</span>
        </div>
    </div>

</div>

@script
<script>
    const toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],
        ['link', 'image', 'video', 'formula'],

        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
        [{ 'direction': 'rtl' }],                         // text direction

        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'font': [] }],
        [{ 'align': [] }],

        ['clean']                                         // remove formatting button
    ];

    const editor = document.getElementById(@js($quillId)),
    editorParent = editor.parentElement,
    quill = new Quill('#' + @js($quillId), {
        placeholder: 'Let\'s write something...',
        theme: @js($theme),
        modules: {
            toolbar: toolbarOptions
        },
    });
    
    let lengthChar = document.getElementById('quill-char-length'),
    lengthWord = document.getElementById('quill-word-length'),
    textLength = 0,
    charLength = 0
    ;

    quill.root.innerHTML = $wire.get('value');
    
    quill.on('text-change', function () {
        let value = quill.root.innerHTML,
        words = quill.getText(),
        chars = words.replace(/\s/g, "").length;
        @this.set('value', value);
        
        lengthWord.innerText = words.split(/\s+/).length - 1;
        lengthChar.innerText = chars;

        const editorHeight = quill.root.scrollHeight;
        const viewportHeight = window.innerHeight;
        const maxHeight = '60vh';

        quill.root.style.height = (editorHeight > viewportHeight) ? maxHeight : '100%';
    });



</script>
@endscript