/**
 * Return a default logger which writes to stdout and stderr.
 *
 * @return {Function} [enhanced log fn]
 * @api private
 */
module.exports = function CaptainsLog ( options ) {

	var _stdout = console.log.bind(console);
	var _stderr = console.error.bind(console);

	// Emulate winston's output stream conventions
	// (so that existing tests will pass)
	return {
		error: _stderr,
		warn: _stdout,
		debug: _stderr,
		info: _stdout,
		verbose: _stdout,
		silly: _stdout
	};

};