# Input fields
Input components have been designed to be accessible. When using these input fields the user will know what fields are filled out and which ones aren't. Selected fields get a special style to emphasize the fact they're selected.

Input fields can have a tooltip message. This message can be help the user better understand what to put in.

### Colors used
<div class="color-container">
  <div class="color" style="--color: #A89E8D">#A89E8D</div>
  <div class="color" style="--color: #34495E">#34495E</div>
  <div class="color" style="--color: #FAF785">#FAF785</div>
</div>

### Example form
<form>
  <div class="input-group">
    <input type="text" name="input" required>
    <label for="">Label</label>
    <label for="" class="tooltip">Tooltip message</label>
  </div>
  <div class="input-group">
    <input type="text" name="input" required>
    <label for="">Label</label>
    <label for="" class="tooltip">Tooltip message</label>
  </div>
  <div class="input-group double">
    <input type="text" name="input" required>
    <label for="">Label</label>
    <label for="" class="tooltip">Tooltip message</label>
  </div>
  <div class="input-group">
    <input type="text" name="input" required>
    <label for="">Label</label>
    <label for="" class="tooltip">Tooltip message</label>
  </div>
</form>
