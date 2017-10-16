# Input fields
Input components have been designed to be accessible. When using these input fields the user will know what fields are filled out and which ones aren't. Selected fields get a special style to emphasize the fact they're selected.

Input fields can have a tooltip message. This message can be help the user better understand what to put in.

Input fields are put into a `form` tag. This form uses `CSS grid` layout to position the various input fields. You can use a class of `double` to force a specific input to always take up all of the form.

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
