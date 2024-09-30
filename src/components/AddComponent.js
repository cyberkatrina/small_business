

<form onSubmit={e => this.handleSubmit(e)}>
 <input type='text' value={this.state.key} onChange={e => this.handleChange(e)} />
 <input type='submit' />
</form>