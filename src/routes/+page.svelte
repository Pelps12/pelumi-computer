<script lang="ts">
	import { onMount } from 'svelte';

	interface ModuleStatus {
		time: number;
		text: string;
	}

	function cloneObject(event: any) {
		var ret: any = {};
		for (var x in event) {
			if (x == x.toUpperCase()) continue;
			var prop = event[x];
			if (typeof prop == 'number' || typeof prop == 'string') ret[x] = prop;
		}
		return ret;
	}

	// Bindable elements
	let statusElement: HTMLElement;
	let progressElement: HTMLProgressElement;
	let spinnerElement: HTMLElement;
	let outputElement: HTMLTextAreaElement;

	let moduleStatus = 'Downloading...';

	import { browser } from '$app/environment';
	import { onDestroy } from 'svelte';
	import { Textarea } from '$lib/components/ui/textarea';
	import { Button } from '$lib/components/ui/button';
	import { page } from '$app/stores';

	let worker: Worker | null = null;

	let workerResponded = false;

	function assert(x: boolean) {
		if (!x) throw 'failed assert';
	}

	function WebGLClient(this: any) {
		var objects: Record<any, any> = {};

		var ctx: any = null;
		var buffer: any = null;
		var i = 0;
		var skippable = false;
		var currFrameBuffer: any = null;

		function func0(name: string | number) {
			ctx[name]();
		}
		function func1(name: string | number) {
			ctx[name](buffer[i]);
			i++;
		}
		function func2(name: string | number) {
			ctx[name](buffer[i], buffer[i + 1]);
			i += 2;
		}
		function func3(name: string | number) {
			ctx[name](buffer[i], buffer[i + 1], buffer[i + 2]);
			i += 3;
		}
		function func4(name: string | number) {
			ctx[name](buffer[i], buffer[i + 1], buffer[i + 2], buffer[i + 3]);
			i += 4;
		}
		function func5(name: string | number) {
			ctx[name](buffer[i], buffer[i + 1], buffer[i + 2], buffer[i + 3], buffer[i + 4]);
			i += 5;
		}
		function func6(name: string | number) {
			ctx[name](
				buffer[i],
				buffer[i + 1],
				buffer[i + 2],
				buffer[i + 3],
				buffer[i + 4],
				buffer[i + 5]
			);
			i += 6;
		}
		function func7(name: string | number) {
			ctx[name](
				buffer[i],
				buffer[i + 1],
				buffer[i + 2],
				buffer[i + 3],
				buffer[i + 4],
				buffer[i + 5],
				buffer[i + 6]
			);
			i += 7;
		}
		function func9(name: string | number) {
			ctx[name](
				buffer[i],
				buffer[i + 1],
				buffer[i + 2],
				buffer[i + 3],
				buffer[i + 4],
				buffer[i + 5],
				buffer[i + 6],
				buffer[i + 7],
				buffer[i + 8]
			);
			i += 9;
		}

		// lookuppers, convert integer ids to cached objects for some args
		function func1L0(name: string | number) {
			ctx[name](objects[buffer[i]]);
			i++;
		}
		function func2L0(name: string | number) {
			ctx[name](objects[buffer[i]], buffer[i + 1]);
			i += 2;
		}
		function func2L0L1(name: string | number) {
			ctx[name](objects[buffer[i]], objects[buffer[i + 1]]);
			i += 2;
		}
		function func2L1_(name: string | number) {
			ctx[name](buffer[i], buffer[i + 1] ? objects[buffer[i + 1]] : null);
			i += 2;
		}
		function func3L0(name: string | number) {
			ctx[name](objects[buffer[i]], buffer[i + 1], buffer[i + 2]);
			i += 3;
		}
		function func4L3_(name: string | number) {
			ctx[name](
				buffer[i],
				buffer[i + 1],
				buffer[i + 2],
				buffer[i + 3] ? objects[buffer[i + 3]] : null
			);
			i += 4;
		}
		function func5L3_(name: string | number) {
			ctx[name](
				buffer[i],
				buffer[i + 1],
				buffer[i + 2],
				buffer[i + 3] ? objects[buffer[i + 3]] : null,
				buffer[i + 4]
			);
			i += 5;
		}

		// constructors, last argument is the id to save as
		function funcC0(name: string | number) {
			var object = ctx[name]();
			var id = buffer[i++];
			objects[id] = object;
		}
		function funcC1(name: string | number) {
			var object = ctx[name](buffer[i++]);
			var id = buffer[i++];
			objects[id] = object;
		}
		function funcC2(name: string | number) {
			var object = ctx[name](buffer[i++], buffer[i++]);
			var id = buffer[i++];
			objects[id] = object;
		}
		function funcC2L0(name: string | number) {
			var object = ctx[name](objects[buffer[i++]], buffer[i++]);
			var id = buffer[i++];
			objects[id] = object;
		}

		// destructors, stop holding on to the object in the cache
		function funcD0(name: string | number) {
			var id = buffer[i++];
			var object = objects[id];
			objects[id] = null;
			ctx[name](object);
		}

		// special cases/optimizations
		function bindFramebuffer() {
			currFrameBuffer = buffer[i + 1] ? objects[buffer[i + 1]] : null;
			ctx.bindFramebuffer(buffer[i], currFrameBuffer);
			i += 2;
		}
		function drawArrays(name: any) {
			if (!skippable || currFrameBuffer !== null) {
				ctx.drawArrays(buffer[i], buffer[i + 1], buffer[i + 2]);
			}
			i += 3;
		}
		function drawElements(name: any) {
			if (!skippable || currFrameBuffer !== null) {
				ctx.drawElements(buffer[i], buffer[i + 1], buffer[i + 2], buffer[i + 3]);
			}
			i += 4;
		}
		function enable() {
			ctx.enable(buffer[i++]);
		}
		function disable() {
			ctx.disable(buffer[i++]);
		}
		function enableVertexAttribArray() {
			ctx.enableVertexAttribArray(buffer[i++]);
		}
		function disableVertexAttribArray() {
			ctx.disableVertexAttribArray(buffer[i++]);
		}
		function activeTexture() {
			ctx.activeTexture(buffer[i++]);
		}
		function uniform1i() {
			ctx.uniform1i(objects[buffer[i]], buffer[i + 1]);
			i += 2;
		}
		function uniform1f() {
			ctx.uniform1f(objects[buffer[i]], buffer[i + 1]);
			i += 2;
		}
		function uniform1fv() {
			ctx.uniform1fv(objects[buffer[i]], buffer[i + 1]);
			i += 2;
		}
		function uniform2fv() {
			ctx.uniform2fv(objects[buffer[i]], buffer[i + 1]);
			i += 2;
		}
		function uniform1iv() {
			ctx.uniform1iv(objects[buffer[i]], buffer[i + 1]);
			i += 2;
		}
		function uniform3f() {
			ctx.uniform3f(objects[buffer[i]], buffer[i + 1], buffer[i + 2], buffer[i + 3]);
			i += 4;
		}
		function uniform3fv() {
			ctx.uniform3fv(objects[buffer[i]], buffer[i + 1]);
			i += 2;
		}
		function uniform4fv() {
			ctx.uniform4fv(objects[buffer[i]], buffer[i + 1]);
			i += 2;
		}
		function vertexAttribPointer() {
			ctx.vertexAttribPointer(
				buffer[i],
				buffer[i + 1],
				buffer[i + 2],
				buffer[i + 3],
				buffer[i + 4],
				buffer[i + 5]
			);
			i += 6;
		}

		var calls: any[] = {
			0: { name: 'NULL', func: func0 },
			1: { name: 'getExtension', func: func1 },
			2: { name: 'enable', func: enable },
			3: { name: 'disable', func: disable },
			4: { name: 'clear', func: func1 },
			5: { name: 'clearColor', func: func4 },
			6: { name: 'createShader', func: funcC1 },
			7: { name: 'deleteShader', func: funcD0 },
			8: { name: 'shaderSource', func: func2L0 },
			9: { name: 'compileShader', func: func1L0 },
			10: { name: 'createProgram', func: funcC0 },
			11: { name: 'deleteProgram', func: funcD0 },
			12: { name: 'attachShader', func: func2L0L1 },
			13: { name: 'bindAttribLocation', func: func3L0 },
			14: { name: 'linkProgram', func: func1L0 },
			15: {
				name: 'getProgramParameter',
				func: () =>
					assert(
						ctx.getProgramParameter(objects[buffer[i++]], buffer[i++]),
						'we cannot handle errors, we are async proxied WebGL'
					)
			},
			16: { name: 'getUniformLocation', func: funcC2L0 },
			17: { name: 'useProgram', func: func1L0 },
			18: { name: 'uniform1i', func: uniform1i },
			19: { name: 'uniform1f', func: uniform1f },
			20: { name: 'uniform3fv', func: uniform3fv },
			21: { name: 'uniform4fv', func: uniform4fv },
			22: { name: 'uniformMatrix4fv', func: func3L0 },
			23: { name: 'vertexAttrib4fv', func: func2 },
			24: { name: 'createBuffer', func: funcC0 },
			25: { name: 'deleteBuffer', func: funcD0 },
			26: { name: 'bindBuffer', func: func2L1_ },
			27: { name: 'bufferData', func: func3 },
			28: { name: 'bufferSubData', func: func3 },
			29: { name: 'viewport', func: func4 },
			30: { name: 'vertexAttribPointer', func: vertexAttribPointer },
			31: {
				name: 'enableVertexAttribArray',
				func: enableVertexAttribArray
			},
			32: {
				name: 'disableVertexAttribArray',
				func: disableVertexAttribArray
			},
			33: { name: 'drawArrays', func: drawArrays },
			34: { name: 'drawElements', func: drawElements },
			35: {
				name: 'getError',
				func: () =>
					assert(
						ctx.getError() === ctx.NO_ERROR,
						'we cannot handle errors, we are async proxied WebGL'
					)
			},
			36: { name: 'createTexture', func: funcC0 },
			37: { name: 'deleteTexture', func: funcD0 },
			38: { name: 'bindTexture', func: func2L1_ },
			39: { name: 'texParameteri', func: func3 },
			40: { name: 'texImage2D', func: func9 },
			41: { name: 'compressedTexImage2D', func: func7 },
			42: { name: 'activeTexture', func: activeTexture },
			43: {
				name: 'getShaderParameter',
				func: () =>
					assert(
						ctx.getShaderParameter(objects[buffer[i++]], buffer[i++]),
						'we cannot handle errors, we are async proxied WebGL'
					)
			},
			44: { name: 'clearDepth', func: func1 },
			45: { name: 'depthFunc', func: func1 },
			46: { name: 'frontFace', func: func1 },
			47: { name: 'cullFace', func: func1 },
			48: { name: 'pixelStorei', func: func2 },
			49: { name: 'depthMask', func: func1 },
			50: { name: 'depthRange', func: func2 },
			51: { name: 'blendFunc', func: func2 },
			52: { name: 'scissor', func: func4 },
			53: { name: 'colorMask', func: func4 },
			54: { name: 'lineWidth', func: func1 },
			55: { name: 'createFramebuffer', func: funcC0 },
			56: { name: 'deleteFramebuffer', func: funcD0 },
			57: { name: 'bindFramebuffer', func: bindFramebuffer },
			58: { name: 'framebufferTexture2D', func: func5L3_ },
			59: { name: 'createRenderbuffer', func: funcC0 },
			60: { name: 'deleteRenderbuffer', func: funcD0 },
			61: { name: 'bindRenderbuffer', func: func2L1_ },
			62: { name: 'renderbufferStorage', func: func4 },
			63: { name: 'framebufferRenderbuffer', func: func4L3_ },
			64: { name: 'debugPrint', func: func1 },
			65: { name: 'hint', func: func2 },
			66: { name: 'blendEquation', func: func1 },
			67: { name: 'generateMipmap', func: func1 },
			68: { name: 'uniformMatrix3fv', func: func3L0 },
			69: { name: 'stencilMask', func: func1 },
			70: { name: 'clearStencil', func: func1 },
			71: { name: 'texSubImage2D', func: func9 },
			72: { name: 'uniform3f', func: uniform3f },
			73: { name: 'blendFuncSeparate', func: func4 },
			74: { name: 'uniform2fv', func: uniform2fv },
			75: { name: 'texParameterf', func: func3 },
			76: {
				name: 'isContextLost',
				func: () =>
					assert(
						!ctx.isContextLost(),
						'context lost which we cannot handle, we are async proxied WebGL'
					)
			},
			77: { name: 'blendEquationSeparate', func: func2 },
			78: { name: 'stencilFuncSeparate', func: func4 },
			79: { name: 'stencilOpSeparate', func: func4 },
			80: { name: 'drawBuffersWEBGL', func: func1 },
			81: { name: 'uniform1iv', func: uniform1iv },
			82: { name: 'uniform1fv', func: uniform1fv }
		} as any;

		function renderCommands(buf: any) {
			ctx = Module.ctx;
			i = 0;
			buffer = buf;
			var len = buffer.length;
			//dump('issuing commands, buffer len: ' + len + '\n');
			while (i < len) {
				var info = calls[buffer[i++]];
				var name = info.name;
				info.func(name);
				//var err;
				//while ((err = ctx.getError()) !== ctx.NO_ERROR) {
				//  dump('warning: GL error ' + err + ', after ' + [command, numArgs] + '\n');
				//}
				assert(i <= len);
			}
		}

		var commandBuffers: any[] = [];

		function renderAllCommands() {
			// we can skip parts of the frames before the last, as we just need their side effects
			skippable = true;
			for (var i = 0; i < commandBuffers.length - 1; i++) {
				renderCommands(commandBuffers[i]);
			}
			skippable = false;
			renderCommands(commandBuffers[commandBuffers.length - 1]);
			commandBuffers.length = 0;
		}

		this.onmessage = (msg: { op: any; commandBuffer: any }) => {
			//dump('client GL got ' + JSON.stringify(msg) + '\n');
			switch (msg.op) {
				case 'render': {
					if (commandBuffers.length === 0) {
						// requestion a new frame, we will clear the buffers after rendering them
						window.requestAnimationFrame(renderAllCommands);
					}
					commandBuffers.push(msg.commandBuffer);
					break;
				}
				default:
					throw 'weird gl onmessage ' + JSON.stringify(msg);
			}
		};
	}

	WebGLClient.prefetch = () => {
		// Create a fake temporary GL context
		var canvas = document.createElement('canvas');
		var ctx: any = canvas.getContext('webgl-experimental') || canvas.getContext('webgl');
		if (!ctx) {
			// If we have no webGL support, we still notify that prefetching is done, as the app blocks on that
			worker &&
				worker.postMessage({
					target: 'gl',
					op: 'setPrefetched',
					preMain: true
				});
			return;
		}

		// Fetch the parameters and proxy them
		var parameters: any = {};
		[
			'MAX_VERTEX_ATTRIBS',
			'MAX_TEXTURE_IMAGE_UNITS',
			'MAX_TEXTURE_SIZE',
			'MAX_CUBE_MAP_TEXTURE_SIZE',
			'MAX_VERTEX_UNIFORM_VECTORS',
			'MAX_FRAGMENT_UNIFORM_VECTORS',
			'MAX_VARYING_VECTORS',
			'MAX_COMBINED_TEXTURE_IMAGE_UNITS',
			'MAX_VERTEX_TEXTURE_IMAGE_UNITS',
			'VENDOR',
			'RENDERER',
			'VERSION',
			'SHADING_LANGUAGE_VERSION',
			'COMPRESSED_TEXTURE_FORMATS',
			'RED_BITS',
			'GREEN_BITS',
			'BLUE_BITS',
			'ALPHA_BITS',
			'DEPTH_BITS',
			'STENCIL_BITS',
			'MAX_RENDERBUFFER_SIZE'
		].forEach(function (name) {
			var id = ctx[name];
			parameters[id] = ctx.getParameter(id);
		});
		// Try to enable some extensions, so we can access their parameters
		[
			{
				extName: 'EXT_texture_filter_anisotropic',
				paramName: 'MAX_TEXTURE_MAX_ANISOTROPY_EXT'
			},
			{
				extName: 'WEBGL_draw_buffers',
				paramName: 'MAX_COLOR_ATTACHMENTS_WEBGL'
			}
		].forEach(function (pair) {
			var ext = ctx.getExtension(pair.extName);
			if (ext) {
				var id = ext[pair.paramName];
				parameters[id] = ctx.getParameter(id);
			}
		});
		// Fetch shader precisions
		var precisions: any = {};
		['FRAGMENT_SHADER', 'VERTEX_SHADER'].forEach(function (shaderType) {
			shaderType = ctx[shaderType];
			precisions[shaderType] = {};
			['LOW_FLOAT', 'MEDIUM_FLOAT', 'HIGH_FLOAT', 'LOW_INT', 'MEDIUM_INT', 'HIGH_INT'].forEach(
				function (precisionType) {
					precisionType = ctx[precisionType];
					var info = ctx.getShaderPrecisionFormat(shaderType, precisionType);
					precisions[shaderType][precisionType] = info
						? {
								rangeMin: info.rangeMin,
								rangeMax: info.rangeMax,
								precision: info.precision
							}
						: info;
				}
			);
		});

		worker?.postMessage({
			target: 'gl',
			op: 'setPrefetched',
			parameters,
			extensions: ctx.getSupportedExtensions(),
			precisions,
			preMain: true
		});
	};

	onDestroy(() => {
		worker?.terminate(); // Cleanup worker
		worker = null;
	});

	const memoryFile = $page.url.searchParams.get('memory');
	const duration = $page.url.searchParams.get('duration');

	if (!memoryFile) {
		alert('MEM FILE MISSING');
	}
	if (!duration) alert('DURATION MISSING');

	// Initialize global Module object

	onMount(async () => {
		globalThis['Module'] = {
			arguments: [memoryFile, duration],
			locateFile: (() => {
				return (path) => {
					console.log(path, 'PATHHH');
					return `https://r2.oluwapelps.com/${path}`;
				};
			})(),
			printWithColors: true,
			remoteWasm: 'https://r2.oluwapelps.com/index.wasm',
			print: (() => {
				let outputElement = document.getElementById('output') as HTMLTextAreaElement;
				console.log('GOT TO PRINT', outputElement);

				return (...args: any[]): void => {
					const text = args.join(' ');
					console.log(text);
					if (outputElement) {
						outputElement.value += text + '\n';
						outputElement.scrollTop = outputElement.scrollHeight;
					}
				};
			})(),
			lastStatus: null,
			ctx: null,
			canvas: (() => {
				const canvas = document.getElementById('canvas') as HTMLCanvasElement;

				// As a default initial behavior, pop up an alert when webgl context is lost. To make your
				// application robust, you may want to override this behavior before shipping!
				// See http://www.khronos.org/registry/webgl/specs/latest/1.0/#5.15.2
				canvas?.addEventListener(
					'webglcontextlost',
					(e) => {
						alert('WebGL context lost. You will need to reload the page.');
						e.preventDefault();
					},
					false
				);

				return canvas;
			})(),
			setStatus(text: string): void {
				const lastStatus = this.lastStatus || { time: Date.now(), text: '' };
				this.lastStatus = { time: Date.now(), text };

				if (text === lastStatus.text) return;

				const progressMatch = text.match(/([^(]+)\((\d+(\.\d+)?)\/(\d+)\)/);
				const progressUpdate = progressMatch ? parseInt(progressMatch[2]) * 100 : 0;
				const progressMax = progressMatch ? parseInt(progressMatch[4]) * 100 : 0;

				progressElement.hidden = !progressMatch;
				spinnerElement.hidden = !progressMatch;
				progressElement.value = progressUpdate;
				progressElement.max = progressMax;

				statusElement.innerText = text;
			},
			totalDependencies: 0,
			monitorRunDependencies(left: number): void {
				this.totalDependencies = Math.max(this.totalDependencies, left);
				Module.setStatus(
					left
						? 'Preparing... (' +
								(this.totalDependencies - left) +
								'/' +
								this.totalDependencies +
								')'
						: 'All downloads complete.'
				);
			}
		};
		console.log(Module);
		Module.setStatus(moduleStatus);

		const errorHandler = (event: Event | string) => {
			Module.setStatus(`Exception thrown, check console`);
			spinnerElement.style.display = 'none';
			Module.setStatus = (text: string) => text && console.error('[post-exception status]', text);
		};

		window.onerror = errorHandler;

		return () => {
			window.onerror = null;
		};
	});

	const reset = () => {
		var script = document.createElement('script');
		script.setAttribute('src', 'api/proxy');
		document.head.appendChild(script);
	};
</script>

<!-- <svelte:head>
	<script async type="text/javascript" src="api/proxy" crossorigin="anonymous"></script>
</svelte:head> -->

<div class="mx-auto w-full max-w-xl">
	<progress id="progress" bind:this={progressElement} hidden></progress>
	<div>
		<p class="text-3xl font-bold">Pelumi's Computer</p>
	</div>
	<Button on:click={() => reset()} class="my-3">Load Computer</Button>
	<div id="status" class="font-semibold" bind:this={statusElement}>{moduleStatus}</div>
	<div id="spinner" bind:this={spinnerElement}></div>
	<Textarea class="h-[85vh] resize font-[VT323]" id="output" readonly></Textarea>
	<canvas id="canvas"></canvas>
</div>
